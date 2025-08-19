---
layout: page
title: 文章分类
permalink: /categories/
description: 浏览博客中的所有文章分类，找到你感兴趣的内容。
---

# 文章分类

这里列出了博客中的所有文章分类，点击分类名称可以查看该分类下的所有文章。

## 分类列表

{% assign categories = site.categories | sort %}
{% for category in categories %}
<div class="category-section">
    <h2 class="category-title">
        <i class="fas fa-folder"></i>
        <a href="{{ '/categories/' | relative_url }}{{ category[0] | slugify }}">
            {{ category[0] }}
        </a>
        <span class="category-count">({{ category[1].size }} 篇文章)</span>
    </h2>
    
    <div class="category-posts">
        {% for post in category[1] limit:5 %}
        <div class="category-post-item">
            <h3 class="post-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
            <div class="post-meta">
                <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">
                    <i class="fas fa-calendar"></i>
                    {{ post.date | date: "%Y年%m月%d日" }}
                </time>
                
                {% if post.tags %}
                <span class="post-tags">
                    <i class="fas fa-tags"></i>
                    {% for tag in post.tags limit:3 %}
                    <a href="{{ '/tags/' | relative_url }}{{ tag | slugify }}" class="tag-link">
                        {{ tag }}
                    </a>
                    {% endfor %}
                </span>
                {% endif %}
            </div>
            
            {% if post.description %}
            <p class="post-excerpt">{{ post.description }}</p>
            {% endif %}
        </div>
        {% endfor %}
        
        {% if category[1].size > 5 %}
        <div class="view-more">
            <a href="{{ '/categories/' | relative_url }}{{ category[0] | slugify }}" class="btn btn-primary">
                查看全部 {{ category[1].size }} 篇文章 <i class="fas fa-arrow-right"></i>
            </a>
        </div>
        {% endif %}
    </div>
</div>
{% endfor %}

## 分类统计

<div class="category-stats">
    <div class="stat-item">
        <div class="stat-number">{{ site.categories.size }}</div>
        <div class="stat-label">总分类数</div>
    </div>
    
    <div class="stat-item">
        <div class="stat-number">{{ site.posts.size }}</div>
        <div class="stat-label">总文章数</div>
    </div>
    
    <div class="stat-item">
        <div class="stat-number">{{ site.tags.size }}</div>
        <div class="stat-label">总标签数</div>
    </div>
</div>

## 如何添加新分类

如果你想为博客添加新的分类，只需要在写文章时在文章头部的 `categories` 字段中添加分类名称即可：

```yaml
---
layout: post
title: "文章标题"
date: 2024-01-16
categories: [新分类名称]
tags: [标签1, 标签2]
---
```

## 分类建议

以下是一些常见的博客分类建议：

- **技术分享**: 编程、开发、工具使用等
- **学习笔记**: 课程学习、读书心得等
- **项目展示**: 个人项目、开源贡献等
- **生活感悟**: 日常思考、旅行记录等
- **行业观察**: 技术趋势、行业动态等
- **教程指南**: 详细的操作步骤和说明

---

*如果你有特定的分类需求或建议，欢迎在评论区告诉我！* 