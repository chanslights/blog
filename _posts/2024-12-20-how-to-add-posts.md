---
layout: post
title: "如何为 Jekyll 博客添加新文章"
date: 2024-12-20 14:30:00 +0800
categories: [教程, 博客]
tags: [Jekyll, Markdown, 写作]
---

今天我来分享一下如何为 Jekyll 博客添加新文章。作为一个静态网站生成器，Jekyll 让写博客变得非常简单。

## 文章结构

每篇文章都需要遵循特定的格式：

1. **文件命名**：必须以日期开头，格式为 `YYYY-MM-DD-title.md`
2. **Front Matter**：文件开头的 YAML 配置
3. **内容**：使用 Markdown 语法编写

## Markdown 语法示例

### 代码高亮

```javascript
function greetBlogReader() {
    console.log("欢迎来到我的博客！");
}
```

### 引用

> "简单是复杂的终极形式。" —— 达·芬奇

### 表格

| 特性 | 描述 |
|------|------|
| 简单 | 易于使用 |
| 快速 | 静态文件加载快 |
| 灵活 | 高度可定制 |

## 总结

使用 Jekyll 写博客真的很简单！只需要：
1. 创建 Markdown 文件
2. 添加 Front Matter
3. 用 Markdown 写内容
4. 提交到 Git 仓库

就这么简单！ 