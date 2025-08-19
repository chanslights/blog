# 🚀 快速开始指南

这个指南将帮助你在 5 分钟内启动你的个人博客！

## ⚡ 超快速开始（推荐）

### 1. 一键启动（macOS/Linux）

```bash
./start.sh
```

### 2. 一键启动（Windows）

双击运行 `start.bat` 文件

## 🔧 手动启动

### 1. 安装依赖

```bash
bundle install
```

### 2. 启动服务器

```bash
bundle exec jekyll serve
```

### 3. 访问博客

在浏览器中打开 `http://localhost:4000`

## 📝 立即开始写文章

### 创建新文章

在 `_posts` 目录下创建文件：`2024-01-17-my-first-post.md`

### 文章模板

```markdown
---
layout: post
title: "我的第一篇文章"
date: 2024-01-17
categories: [技术分享]
tags: [博客, 教程]
description: "这是我的第一篇文章"
---

# 文章标题

这里是文章内容...

## 小标题

更多内容...
```

## 🎨 快速自定义

### 修改博客信息

编辑 `_config.yml`：

```yaml
title: 你的博客标题
author: 你的名字
email: your-email@example.com
url: "https://你的用户名.github.io"
```

### 修改关于页面

编辑 `_pages/about.md`，更新你的个人信息。

### 修改颜色主题

编辑 `assets/css/main.css` 中的 CSS 变量。

## 🌐 部署到 GitHub Pages

### 1. 创建仓库

创建名为 `你的用户名.github.io` 的仓库

### 2. 推送代码

```bash
git add .
git commit -m "Initial blog setup"
git push origin main
```

### 3. 配置 Pages

在仓库设置中启用 GitHub Pages

## 🎯 下一步

- 📖 阅读 [完整部署指南](./DEPLOYMENT.md)
- 📚 查看 [项目说明](./README.md)
- 🎨 自定义你的博客主题
- ✍️ 开始写你的第一篇文章

## 🆘 遇到问题？

- 检查 Ruby 版本（需要 2.7.0+）
- 确保已安装 Jekyll：`gem install jekyll bundler`
- 查看错误日志，通常会有详细提示

---

**恭喜！你现在拥有了一个功能完整的个人博客！** 🎉 