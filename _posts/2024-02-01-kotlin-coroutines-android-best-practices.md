---
layout: post
title: "Kotlin Coroutines in Android: Patterns and Best Practices"
date: 2024-02-01 14:30:00 +0100
author: Cyril Mottier
tags: [Kotlin, Coroutines, Android, Concurrency, Performance]
excerpt: "Master Kotlin Coroutines in Android development with practical patterns, performance tips, and common pitfalls to avoid."
---

Kotlin Coroutines have fundamentally changed how we handle asynchronous programming in Android. They provide a more intuitive way to write concurrent code that's both readable and performant. In this post, I'll share practical patterns and best practices I've learned from using coroutines in production Android apps.

## Understanding Coroutine Scopes

### ViewModelScope for UI Logic

Always use `viewModelScope` for operations tied to your ViewModel lifecycle:

```kotlin
class UserViewModel(
    private val userRepository: UserRepository
) : ViewModel() {
    
    private val _uiState = MutableStateFlow(UserUiState.Loading)
    val uiState: StateFlow<UserUiState> = _uiState.asStateFlow()
    
    fun loadUser(userId: String) {
        viewModelScope.launch {
            _uiState.value = UserUiState.Loading
            try {
                val user = userRepository.getUser(userId)
                _uiState.value = UserUiState.Success(user)
            } catch (exception: Exception) {
                _uiState.value = UserUiState.Error(exception.message)
            }
        }
    }
}
```

### LifecycleScope for UI Updates

Use `lifecycleScope` when you need to perform operations that should respect the Activity or Fragment lifecycle:

```kotlin
class MainActivity : AppCompatActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Collect UI state updates
        lifecycleScope.launch {
            viewModel.uiState.collect { state ->
                when (state) {
                    is UserUiState.Loading -> showLoading()
                    is UserUiState.Success -> showUser(state.user)
                    is UserUiState.Error -> showError(state.message)
                }
            }
        }
    }
}
```

## StateFlow vs LiveData

### When to Use StateFlow

StateFlow is perfect for representing UI state that can be consumed by multiple observers:

```kotlin
class SearchViewModel : ViewModel() {
    
    private val _searchQuery = MutableStateFlow("")
    val searchQuery: StateFlow<String> = _searchQuery.asStateFlow()
    
    private val _searchResults = MutableStateFlow<List<SearchResult>>(emptyList())
    val searchResults: StateFlow<List<SearchResult>> = _searchResults.asStateFlow()
    
    fun updateSearchQuery(query: String) {
        _searchQuery.value = query
        searchProducts(query)
    }
    
    private fun searchProducts(query: String) {
        viewModelScope.launch {
            if (query.isBlank()) {
                _searchResults.value = emptyList()
                return@launch
            }
            
            try {
                val results = searchRepository.search(query)
                _searchResults.value = results
            } catch (e: Exception) {
                _searchResults.value = emptyList()
            }
        }
    }
}
```

### Combining StateFlows

Use `combine` to create derived state from multiple StateFlows:

```kotlin
class ShoppingCartViewModel : ViewModel() {
    
    private val _cartItems = MutableStateFlow<List<CartItem>>(emptyList())
    private val _discountCode = MutableStateFlow<String?>(null)
    
    val cartSummary: StateFlow<CartSummary> = combine(
        _cartItems,
        _discountCode
    ) { items, discount ->
        calculateCartSummary(items, discount)
    }.stateIn(
        scope = viewModelScope,
        started = SharingStarted.WhileSubscribed(5000),
        initialValue = CartSummary.empty()
    )
    
    private fun calculateCartSummary(
        items: List<CartItem>,
        discountCode: String?
    ): CartSummary {
        // Calculate total, apply discount, etc.
        return CartSummary(items, discountCode)
    }
}
```

## Error Handling Patterns

### Structured Exception Handling

Create a centralized error handling mechanism:

```kotlin
sealed class Result<out T> {
    data class Success<T>(val data: T) : Result<T>()
    data class Error(val exception: Throwable) : Result<Nothing>()
    object Loading : Result<Nothing>()
}

inline fun <T> Result<T>.onSuccess(action: (T) -> Unit): Result<T> {
    if (this is Result.Success) action(data)
    return this
}

inline fun <T> Result<T>.onError(action: (Throwable) -> Unit): Result<T> {
    if (this is Result.Error) action(exception)
    return this
}

// Usage in Repository
class UserRepository {
    
    suspend fun getUser(userId: String): Result<User> {
        return try {
            val user = apiService.getUser(userId)
            Result.Success(user)
        } catch (e: Exception) {
            Result.Error(e)
        }
    }
}

// Usage in ViewModel
class UserViewModel : ViewModel() {
    
    fun loadUser(userId: String) {
        viewModelScope.launch {
            userRepository.getUser(userId)
                .onSuccess { user -> 
                    _uiState.value = UserUiState.Success(user)
                }
                .onError { exception ->
                    _uiState.value = UserUiState.Error(exception.message)
                }
        }
    }
}
```

### Global Exception Handler

Set up a global exception handler for unhandled coroutine exceptions:

```kotlin
class MyApplication : Application() {
    
    override fun onCreate() {
        super.onCreate()
        
        // Set global coroutine exception handler
        CoroutineExceptionHandler { _, exception ->
            Log.e("CoroutineException", "Unhandled coroutine exception", exception)
            // Report to crash analytics
            FirebaseCrashlytics.getInstance().recordException(exception)
        }
    }
}
```

## Performance Optimization

### Use Dispatchers Appropriately

Choose the right dispatcher for your use case:

```kotlin
class DataRepository {
    
    // CPU-intensive work
    suspend fun processLargeDataset(data: List<String>): List<ProcessedData> {
        return withContext(Dispatchers.Default) {
            data.map { item ->
                // Heavy computation
                processItem(item)
            }
        }
    }
    
    // I/O operations
    suspend fun fetchDataFromNetwork(): ApiResponse {
        return withContext(Dispatchers.IO) {
            apiService.getData()
        }
    }
    
    // Database operations
    suspend fun saveToDatabase(data: List<Item>) {
        withContext(Dispatchers.IO) {
            database.itemDao().insertAll(data)
        }
    }
}
```

### Avoid Creating Too Many Coroutines

Use `flow` for streaming data instead of launching multiple coroutines:

```kotlin
// ❌ Don't do this
class LocationViewModel : ViewModel() {
    
    fun startLocationUpdates() {
        viewModelScope.launch {
            while (true) {
                val location = locationService.getCurrentLocation()
                _currentLocation.value = location
                delay(1000) // Update every second
            }
        }
    }
}

// ✅ Do this instead
class LocationViewModel : ViewModel() {
    
    val currentLocation: StateFlow<Location?> = locationService
        .locationUpdates()
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(),
            initialValue = null
        )
}

class LocationService {
    
    fun locationUpdates(): Flow<Location> = flow {
        while (currentCoroutineContext().isActive) {
            val location = getCurrentLocation()
            emit(location)
            delay(1000)
        }
    }.flowOn(Dispatchers.IO)
}
```

## Testing Coroutines

### Setting Up Test Environment

Use `TestCoroutineScheduler` for deterministic testing:

```kotlin
@ExperimentalCoroutinesApi
class UserViewModelTest {
    
    private val testScheduler = TestCoroutineScheduler()
    private val testDispatcher = StandardTestDispatcher(testScheduler)
    
    @get:Rule
    val mainDispatcherRule = MainDispatcherRule(testDispatcher)
    
    private lateinit var userRepository: UserRepository
    private lateinit var viewModel: UserViewModel
    
    @Before
    fun setup() {
        userRepository = mockk()
        viewModel = UserViewModel(userRepository)
    }
    
    @Test
    fun `loadUser should emit loading then success states`() = runTest {
        // Given
        val userId = "123"
        val expectedUser = User(userId, "John Doe")
        coEvery { userRepository.getUser(userId) } returns Result.Success(expectedUser)
        
        // When
        viewModel.loadUser(userId)
        
        // Then
        val states = mutableListOf<UserUiState>()
        val job = launch(UnconfinedTestDispatcher()) {
            viewModel.uiState.collect { states.add(it) }
        }
        
        testScheduler.advanceUntilIdle()
        
        assertEquals(
            listOf(
                UserUiState.Loading,
                UserUiState.Success(expectedUser)
            ),
            states
        )
        
        job.cancel()
    }
}
```

### Testing Flows

Test Flow emissions with `turbine` library:

```kotlin
@Test
fun `search query should trigger search results`() = runTest {
    // Given
    val query = "test query"
    val expectedResults = listOf(SearchResult("item1"), SearchResult("item2"))
    coEvery { searchRepository.search(query) } returns expectedResults
    
    // When & Then
    viewModel.searchResults.test {
        viewModel.updateSearchQuery(query)
        
        assertEquals(emptyList<SearchResult>(), awaitItem()) // Initial value
        assertEquals(expectedResults, awaitItem()) // Search results
    }
}
```

## Common Pitfalls and Solutions

### Avoid Blocking the Main Thread

Never use `runBlocking` in production code on the main thread:

```kotlin
// ❌ Never do this
fun onClick() {
    runBlocking {
        val result = repository.getData() // This blocks the UI thread!
    }
}

// ✅ Do this instead
fun onClick() {
    viewModelScope.launch {
        val result = repository.getData()
        // Handle result
    }
}
```

### Handle Cancellation Properly

Make your suspend functions cancellation-aware:

```kotlin
// ❌ Not cancellation-aware
suspend fun processItems(items: List<Item>): List<ProcessedItem> {
    val results = mutableListOf<ProcessedItem>()
    for (item in items) {
        results.add(processItem(item)) // Long-running operation
    }
    return results
}

// ✅ Cancellation-aware
suspend fun processItems(items: List<Item>): List<ProcessedItem> {
    val results = mutableListOf<ProcessedItem>()
    for (item in items) {
        ensureActive() // Check for cancellation
        results.add(processItem(item))
    }
    return results
}
```

### Proper Resource Management

Always clean up resources in finally blocks or use `use`:

```kotlin
suspend fun downloadFile(url: String): File {
    return withContext(Dispatchers.IO) {
        val connection = URL(url).openConnection()
        try {
            connection.inputStream.use { input ->
                val file = File.createTempFile("download", ".tmp")
                file.outputStream().use { output ->
                    input.copyTo(output)
                }
                file
            }
        } finally {
            connection.disconnect()
        }
    }
}
```

## Conclusion

Kotlin Coroutines provide a powerful foundation for asynchronous programming in Android. By following these patterns and best practices, you can write more maintainable, performant, and testable code.

Key takeaways:
- Choose the appropriate coroutine scope for your use case
- Use StateFlow for UI state management
- Implement proper error handling strategies
- Choose the right dispatcher for your operations
- Make your code cancellation-aware
- Write comprehensive tests for your coroutine code

The transition from callbacks and RxJava to coroutines might seem daunting at first, but the improved readability and reduced complexity make it worthwhile. Start small, apply these patterns gradually, and you'll soon appreciate the elegance of coroutine-based code.

---

*Have you encountered any specific challenges when adopting coroutines in your Android projects? I'd love to hear about your experiences and solutions in the comments!* 