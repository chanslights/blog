---
layout: post
title: "Android Architecture Components: Best Practices for Modern Apps"
date: 2024-01-15 10:00:00 +0100
author: Cyril Mottier
tags: [Android, Architecture, MVVM, LiveData, ViewModel]
excerpt: "A deep dive into Android Architecture Components and how to use them effectively to build scalable, maintainable Android applications."
---

Android Architecture Components have revolutionized how we build Android applications. In this post, I'll share some best practices I've learned from implementing these components in production apps.

## Why Architecture Components Matter

Building maintainable Android applications has always been challenging. The Android framework doesn't enforce any particular architecture pattern, which gives developers flexibility but can also lead to tightly coupled code that's difficult to test and maintain.

Architecture Components provide a set of libraries that help you design robust, testable, and maintainable apps:

- **ViewModel**: Manages UI-related data in a lifecycle-conscious way
- **LiveData**: Provides observable data holders with lifecycle awareness
- **Room**: Provides an abstraction layer over SQLite
- **Navigation**: Handles in-app navigation consistently

## ViewModel Best Practices

### Keep ViewModels Lifecycle-Agnostic

One of the most important principles is to keep your ViewModels completely unaware of the Android lifecycle. ViewModels should never hold references to Activities, Fragments, or Views.

```kotlin
// ❌ Don't do this
class UserViewModel : ViewModel() {
    private var context: Context? = null
    
    fun setContext(context: Context) {
        this.context = context
    }
}

// ✅ Do this instead
class UserViewModel(
    private val userRepository: UserRepository
) : ViewModel() {
    
    private val _userData = MutableLiveData<User>()
    val userData: LiveData<User> = _userData
    
    fun loadUser(userId: String) {
        viewModelScope.launch {
            _userData.value = userRepository.getUser(userId)
        }
    }
}
```

### Use ViewModelFactory for Dependency Injection

Always provide dependencies through constructor injection rather than creating them inside the ViewModel:

```kotlin
class UserViewModelFactory(
    private val userRepository: UserRepository
) : ViewModelProvider.Factory {
    
    @Suppress("UNCHECKED_CAST")
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(UserViewModel::class.java)) {
            return UserViewModel(userRepository) as T
        }
        throw IllegalArgumentException("Unknown ViewModel class")
    }
}
```

## LiveData Patterns

### Transformations for Data Processing

Use `Transformations.map()` and `Transformations.switchMap()` to process LiveData streams:

```kotlin
class UserViewModel(
    private val userRepository: UserRepository
) : ViewModel() {
    
    private val userId = MutableLiveData<String>()
    
    val user: LiveData<User> = userId.switchMap { id ->
        userRepository.getUser(id)
    }
    
    val userName: LiveData<String> = user.map { user ->
        "${user.firstName} ${user.lastName}"
    }
    
    fun setUserId(id: String) {
        userId.value = id
    }
}
```

### Combining Multiple LiveData Sources

Use `MediatorLiveData` when you need to combine multiple LiveData sources:

```kotlin
class UserProfileViewModel : ViewModel() {
    
    private val userLiveData = MutableLiveData<User>()
    private val settingsLiveData = MutableLiveData<UserSettings>()
    
    val userProfile = MediatorLiveData<UserProfile>().apply {
        addSource(userLiveData) { user ->
            value = combineUserData(user, settingsLiveData.value)
        }
        addSource(settingsLiveData) { settings ->
            value = combineUserData(userLiveData.value, settings)
        }
    }
    
    private fun combineUserData(user: User?, settings: UserSettings?): UserProfile? {
        return if (user != null && settings != null) {
            UserProfile(user, settings)
        } else null
    }
}
```

## Room Database Optimization

### Use Suspend Functions for Database Operations

Always use suspend functions for database operations to avoid blocking the main thread:

```kotlin
@Dao
interface UserDao {
    
    @Query("SELECT * FROM users WHERE id = :userId")
    suspend fun getUser(userId: String): User?
    
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertUser(user: User)
    
    @Query("SELECT * FROM users")
    fun getAllUsersLiveData(): LiveData<List<User>>
}
```

### Repository Pattern Implementation

Implement the Repository pattern to abstract data sources:

```kotlin
class UserRepository(
    private val userDao: UserDao,
    private val userApiService: UserApiService
) {
    
    fun getUser(userId: String): LiveData<User> {
        // Return cached data immediately
        return userDao.getUserLiveData(userId).also {
            // Refresh data in background
            refreshUser(userId)
        }
    }
    
    private fun refreshUser(userId: String) {
        viewModelScope.launch {
            try {
                val user = userApiService.getUser(userId)
                userDao.insertUser(user)
            } catch (e: Exception) {
                // Handle error appropriately
                Log.e("UserRepository", "Failed to refresh user", e)
            }
        }
    }
}
```

## Testing Architecture Components

### Testing ViewModels

ViewModels are easy to test since they don't depend on Android framework classes:

```kotlin
@ExperimentalCoroutinesApi
class UserViewModelTest {
    
    @get:Rule
    val instantTaskExecutorRule = InstantTaskExecutorRule()
    
    @get:Rule
    val mainCoroutineRule = MainCoroutineRule()
    
    private lateinit var userRepository: UserRepository
    private lateinit var viewModel: UserViewModel
    
    @Before
    fun setup() {
        userRepository = mockk()
        viewModel = UserViewModel(userRepository)
    }
    
    @Test
    fun `loadUser should update userData LiveData`() = runTest {
        // Given
        val userId = "123"
        val expectedUser = User(userId, "John", "Doe")
        coEvery { userRepository.getUser(userId) } returns expectedUser
        
        // When
        viewModel.loadUser(userId)
        
        // Then
        assertEquals(expectedUser, viewModel.userData.value)
    }
}
```

## Common Pitfalls to Avoid

### Memory Leaks with Observers

Always use `LifecycleOwner` when observing LiveData to avoid memory leaks:

```kotlin
// ❌ This can cause memory leaks
viewModel.userData.observeForever { user ->
    updateUI(user)
}

// ✅ This is lifecycle-aware
viewModel.userData.observe(this) { user ->
    updateUI(user)
}
```

### Overusing LiveData

Don't use LiveData for one-shot operations. Use it for data that changes over time:

```kotlin
// ❌ Don't use LiveData for one-shot operations
val saveResult: LiveData<Boolean> = ...

// ✅ Use coroutines or callbacks instead
suspend fun saveUser(user: User): Boolean {
    return userRepository.saveUser(user)
}
```

## Conclusion

Android Architecture Components provide a solid foundation for building maintainable Android applications. By following these best practices, you can create apps that are easier to test, debug, and extend.

The key is to embrace the reactive programming model and let the framework handle lifecycle management for you. This leads to cleaner, more predictable code that's easier to reason about.

Remember: good architecture is not about using every available tool, but about choosing the right tools for your specific use case and applying them consistently throughout your application.

---

*What are your experiences with Android Architecture Components? Have you encountered any challenges or discovered additional best practices? I'd love to hear your thoughts in the comments below.* 