---
layout: page
title: 文章标签
permalink: /tags/
description: 浏览博客中的所有文章标签，快速找到感兴趣的内容。
---

# 文章标签

这里列出了博客中的所有文章标签，点击标签名称可以查看该标签下的所有文章。

## 标签云

<div class="tags-cloud">
    {% assign tags = site.tags | sort %}
    {% for tag in tags %}
    <a href="{{ '/tags/' | relative_url }}{{ tag[0] | slugify }}" 
       class="tag-item tag-size-{{ tag[1].size | at_most: 5 }}">
        {{ tag[0] }}
        <span class="tag-count">({{ tag[1].size }})</span>
    </a>
    {% endfor %}
</div>

## 标签列表

{% for tag in tags %}
<div class="tag-section">
    <h2 class="tag-title">
        <i class="fas fa-tag"></i>
        <a href="{{ '/tags/' | relative_url }}{{ tag[0] | slugify }}">
            {{ tag[0] }}
        </a>
        <span class="tag-count">({{ tag[1].size }} 篇文章)</span>
    </h2>
    
    <div class="tag-posts">
        {% for post in tag[1] limit:5 %}
        <div class="tag-post-item">
            <h3 class="post-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
            <div class="post-meta">
                <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">
                    <i class="fas fa-calendar"></i>
                    {{ post.date | date: "%Y年%m月%d日" }}
                </time>
                
                {% if post.categories %}
                <span class="post-categories">
                    <i class="fas fa-folder"></i>
                    {% for category in post.categories limit:2 %}
                    <a href="{{ '/categories/' | relative_url }}{{ category | slugify }}" class="category-link">
                        {{ category }}
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
        
        {% if tag[1].size > 5 %}
        <div class="view-more">
            <a href="{{ '/tags/' | relative_url }}{{ tag[0] | slugify }}" class="btn btn-primary">
                查看全部 {{ tag[1].size }} 篇文章 <i class="fas fa-arrow-right"></i>
            </a>
        </div>
        {% endif %}
    </div>
</div>
{% endfor %}

## 标签统计

<div class="tag-stats">
    <div class="stat-item">
        <div class="stat-number">{{ site.tags.size }}</div>
        <div class="stat-label">总标签数</div>
    </div>
    
    <div class="stat-item">
        <div class="stat-number">{{ site.posts.size }}</div>
        <div class="stat-label">总文章数</div>
    </div>
    
    <div class="stat-item">
        <div class="stat-number">{{ site.categories.size }}</div>
        <div class="stat-label">总分类数</div>
    </div>
</div>

## 热门标签

<div class="popular-tags">
    <h3>最受欢迎的标签</h3>
    <div class="popular-tags-list">
        {% assign sorted_tags = site.tags | sort_by: 'size' | reverse %}
        {% for tag in sorted_tags limit:10 %}
        <div class="popular-tag-item">
            <a href="{{ '/tags/' | relative_url }}{{ tag[0] | slugify }}" class="popular-tag-link">
                <span class="tag-name">{{ tag[0] }}</span>
                <span class="tag-count">{{ tag[1].size }} 篇文章</span>
            </a>
        </div>
        {% endfor %}
    </div>
</div>

## 如何添加新标签

如果你想为博客文章添加新的标签，只需要在写文章时在文章头部的 `tags` 字段中添加标签名称即可：

```yaml
---
layout: post
title: "文章标题"
date: 2024-01-16
categories: [分类名称]
tags: [新标签1, 新标签2, 新标签3]
---
```

## 标签使用建议

### 标签命名规范
- 使用简洁明了的词汇
- 避免过于宽泛的标签（如"技术"、"编程"）
- 使用具体的、有意义的标签（如"Python"、"React"、"机器学习"）

### 标签数量建议
- 每篇文章建议使用 3-5 个标签
- 不要过度标签化，保持标签的相关性
- 定期整理和合并相似的标签

### 常见标签类型
- **技术标签**: Python, JavaScript, React, Docker, Git
- **主题标签**: 教程, 心得, 项目, 问题解决
- **难度标签**: 入门, 中级, 高级, 专家级
- **领域标签**: 前端, 后端, 移动端, 数据科学

## 标签搜索

你可以使用浏览器的搜索功能（Ctrl+F 或 Cmd+F）快速找到特定的标签。

---

*如果你有标签相关的建议或问题，欢迎在评论区告诉我！* 