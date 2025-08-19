# GitHub Pages 博客部署指南

本指南将帮助你使用 GitHub Pages 部署你的个人博客。

## 前置要求

1. **GitHub 账户**: 确保你有一个 GitHub 账户
2. **Ruby 环境**: 本地需要安装 Ruby 2.7.0 或更高版本
3. **Git**: 本地需要安装 Git

## 步骤 1: 创建 GitHub 仓库

1. 登录 GitHub，点击右上角的 "+" 号，选择 "New repository"
2. 仓库名称设置为：`你的用户名.github.io`（例如：`johndoe.github.io`）
3. 选择 "Public"（公开）
4. 不要勾选 "Add a README file"
5. 点击 "Create repository"

## 步骤 2: 配置仓库设置

1. 进入你刚创建的仓库
2. 点击 "Settings" 标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分，选择 "Deploy from a branch"
5. 在 "Branch" 下拉菜单中选择 "main" 分支
6. 点击 "Save"

## 步骤 3: 本地环境准备

### 安装 Ruby

**macOS (使用 Homebrew):**
```bash
brew install ruby
```

**Windows:**
- 下载并安装 [RubyInstaller](https://rubyinstaller.org/)

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install ruby-full
```

### 安装 Jekyll

```bash
gem install jekyll bundler
```

## 步骤 4: 克隆仓库到本地

```bash
git clone https://github.com/你的用户名/你的用户名.github.io.git
cd 你的用户名.github.io
```

## 步骤 5: 安装依赖

```bash
bundle install
```

## 步骤 6: 本地测试

```bash
bundle exec jekyll serve
```

然后在浏览器中访问 `http://localhost:4000` 查看你的博客。

## 步骤 7: 自定义配置

### 修改 _config.yml

编辑 `_config.yml` 文件，更新以下信息：

```yaml
title: 你的博客标题
author: 你的名字
email: your-email@example.com
url: "https://你的用户名.github.io"
baseurl: ""  # 如果仓库名是 用户名.github.io，这里留空
```

### 修改个人信息

1. 编辑 `_pages/about.md`，更新你的个人信息
2. 编辑 `_layouts/default.html`，更新社交媒体链接
3. 根据需要修改样式文件 `assets/css/main.css`

## 步骤 8: 添加文章

### 创建新文章

在 `_posts` 目录下创建新的 Markdown 文件，文件名格式为：`YYYY-MM-DD-文章标题.md`

例如：`2024-01-17-my-first-post.md`

### 文章头部信息

每篇文章都需要包含以下头部信息：

```yaml
---
layout: post
title: "文章标题"
date: 2024-01-17
categories: [分类名称]
tags: [标签1, 标签2]
description: "文章描述"
---
```

## 步骤 9: 提交和推送

```bash
git add .
git commit -m "Initial blog setup"
git push origin main
```

## 步骤 10: 等待部署

GitHub Pages 会自动构建和部署你的博客。通常需要几分钟时间。

部署完成后，你可以通过 `https://你的用户名.github.io` 访问你的博客。

## 自定义域名（可选）

如果你想使用自定义域名：

1. 在 `_config.yml` 中更新 `url` 字段
2. 在仓库的 "Settings" > "Pages" 中添加自定义域名
3. 在你的域名提供商处添加 CNAME 记录

## 故障排除

### 常见问题

1. **构建失败**
   - 检查 `_config.yml` 语法是否正确
   - 查看 GitHub Actions 日志

2. **样式不显示**
   - 确保 CSS 文件路径正确
   - 检查文件权限

3. **文章不显示**
   - 检查文章文件名格式
   - 确保文章头部信息正确

### 获取帮助

- [Jekyll 官方文档](https://jekyllrb.com/docs/)
- [GitHub Pages 文档](https://pages.github.com/)
- [Jekyll 社区](https://talk.jekyllrb.com/)

## 维护和更新

### 定期更新

```bash
# 拉取最新代码
git pull origin main

# 更新依赖
bundle update

# 本地测试
bundle exec jekyll serve

# 提交更改
git add .
git commit -m "Update blog content"
git push origin main
```

### 备份

定期备份你的博客内容：

```bash
# 创建备份分支
git checkout -b backup-$(date +%Y%m%d)

# 推送到远程
git push origin backup-$(date +%Y%m%d)
```

## 结语

恭喜！你现在拥有了一个功能完整的个人博客。记得定期更新内容，与读者互动，享受写作的乐趣！

如果你有任何问题，欢迎在 GitHub 上提交 Issue 或联系我。 