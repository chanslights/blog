---
title: 个人博客
permalink: /blog/
---

# 个人博客

欢迎来到我的个人博客！这里记录了我的学习心得、技术分享和生活感悟。

## 快速导航

- [📝 上传文章](/blog/upload) - 发布新的博客文章
- [📚 文章列表](/blog/list) - 浏览所有已发布的文章

## 最新文章

<div id="latest-articles-app">
  <div v-if="latestArticles.length > 0" class="latest-articles">
    <div 
      v-for="article in latestArticles" 
      :key="article.fileName" 
      class="article-preview"
    >
      <h3 class="article-title">
        <a :href="`/blog/list#${article.fileName}`">{{ article.title }}</a>
      </h3>
      <div class="article-meta">
        <span class="category">{{ article.category }}</span>
        <span class="date">{{ formatDate(article.uploadTime) }}</span>
      </div>
      <p v-if="article.description" class="article-description">
        {{ article.description }}
      </p>
    </div>
  </div>
  
  <div v-else class="no-articles">
    <p>还没有发布任何文章</p>
    <a href="/blog/upload" class="upload-btn">发布第一篇文章</a>
  </div>
</div>

## 分类统计

<div id="category-stats-app">
  <div v-if="categoryStats.length > 0" class="category-stats">
    <div 
      v-for="stat in categoryStats" 
      :key="stat.category" 
      class="category-item"
    >
      <span class="category-name">{{ stat.category }}</span>
      <span class="category-count">{{ stat.count }} 篇</span>
    </div>
  </div>
</div>

<script>
export default {
  data() {
    return {
      latestArticles: [],
      categoryStats: []
    }
  },
  
  mounted() {
    if (typeof localStorage !== 'undefined') {
      this.loadLatestArticles();
      this.loadCategoryStats();
    }
  },
  
  methods: {
    loadLatestArticles() {
      if (typeof localStorage === 'undefined') return;
      
      const articles = JSON.parse(localStorage.getItem('blog-articles') || '[]');
      this.latestArticles = articles
        .sort((a, b) => new Date(b.uploadTime) - new Date(a.uploadTime))
        .slice(0, 5);
    },
    
    loadCategoryStats() {
      if (typeof localStorage === 'undefined') return;
      
      const articles = JSON.parse(localStorage.getItem('blog-articles') || '[]');
      const categoryMap = {};
      
      articles.forEach(article => {
        const category = article.category || '未分类';
        categoryMap[category] = (categoryMap[category] || 0) + 1;
      });
      
      this.categoryStats = Object.entries(categoryMap)
        .map(([category, count]) => ({ category, count }))
        .sort((a, b) => b.count - a.count);
    },
    
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
}
</script>

<style scoped>
.latest-articles {
  margin: 30px 0;
}

.article-preview {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background: white;
  transition: box-shadow 0.3s ease;
}

.article-preview:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.article-title {
  margin: 0 0 10px 0;
  font-size: 20px;
}

.article-title a {
  color: #333;
  text-decoration: none;
}

.article-title a:hover {
  color: #007bff;
}

.article-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
}

.category {
  background: #007bff;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
}

.article-description {
  color: #666;
  line-height: 1.5;
  margin: 0;
}

.no-articles {
  text-align: center;
  padding: 40px;
  color: #666;
}

.upload-btn {
  display: inline-block;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 15px;
  transition: background-color 0.3s;
}

.upload-btn:hover {
  background: #0056b3;
}

.category-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 20px 0;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 15px;
  background: #f8f9fa;
  border-radius: 20px;
  font-size: 14px;
}

.category-name {
  color: #333;
  font-weight: 500;
}

.category-count {
  background: #007bff;
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
}

@media (max-width: 768px) {
  .article-meta {
    flex-direction: column;
    gap: 5px;
  }
  
  .category-stats {
    justify-content: center;
  }
}
</style>
