---
layout: post
title: "Principle of minimalist blog design"
date: 2025-8-18 15:30:00 +0800
categories: [tutorial, web-development]
tags: [jekyll, github-pages, minimalism, design]
---

在这个信息爆炸的时代，极简主义设计越来越受到人们的青睐。今天我来分享一下如何构建一个像 Cyril Mottier 网站那样简洁优雅的个人博客。

## 设计原则

### 1. 内容为王
极简设计的核心是突出内容，减少视觉干扰：
- 使用大量留白
- 选择简洁的字体
- 保持一致的排版

### 2. 色彩搭配
- **浅色模式**：纯白背景 + 纯黑文字
- **深色模式**：纯黑背景 + 纯白文字
- 使用灰色作为辅助色彩

### 3. 交互设计
- 悬停效果要微妙
- 过渡动画要流畅
- 保持交互的一致性

## 技术选型

### Jekyll + GitHub Pages
选择这个组合的原因：
- **免费托管** - GitHub Pages 提供免费的静态网站托管
- **简单维护** - 使用 Markdown 写文章，Git 管理版本
- **高性能** - 静态网站加载速度快
- **SEO 友好** - 静态 HTML 对搜索引擎友好

### 核心技术栈
```
- Jekyll 4.3.0 (静态网站生成器)
- HTML5 + CSS3 (结构和样式)
- JavaScript ES6+ (交互功能)
- Markdown (文章写作)
```

## 实现细节

### 1. 响应式布局
使用 CSS Grid 和 Flexbox 实现响应式设计：

```css
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;
}

@media (max-width: 768px) {
    .container {
        padding: 0 16px;
    }
}
```

### 2. 主题切换
使用 CSS 变量和 JavaScript 实现主题切换：

```javascript
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}
```

### 3. 性能优化
- 使用系统字体栈减少字体加载时间
- 最小化 CSS 和 JavaScript
- 使用 `prefers-color-scheme` 检测系统主题偏好

## 部署到 GitHub Pages

### 1. 创建仓库
在 GitHub 上创建一个新仓库，命名为 `username.github.io`

### 2. 配置 Jekyll
在 `_config.yml` 中配置基本信息：

```yaml
title: "Your Name"
description: "Leadership, engineering and product"
url: "https://username.github.io"
baseurl: ""
```

### 3. 启用 GitHub Pages
在仓库设置中启用 GitHub Pages，选择从 `main` 分支部署。

## 写作体验

### Markdown 优势
使用 Markdown 写文章的好处：
- 语法简单，专注内容
- 版本控制友好
- 可以轻松添加代码块和链接

### 文章结构
每篇文章都包含 YAML 前置数据：

```yaml
---
layout: post
title: "文章标题"
date: 2024-12-18 15:30:00 +0800
categories: [category1, category2]
tags: [tag1, tag2, tag3]
---
```

## 总结

构建极简风格的博客需要在设计和技术上都保持克制。重要的是：

1. **专注内容** - 让读者的注意力集中在文字上
2. **保持简洁** - 去除不必要的装饰和功能
3. **注重体验** - 确保在各种设备上都有良好的阅读体验
4. **持续优化** - 根据使用情况不断改进

希望这篇文章能帮助你构建出属于自己的极简博客！ 