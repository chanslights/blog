# GitHub Pages 部署指南

这个博客已经配置好了，可以直接部署到 GitHub Pages。

## 快速部署步骤

### 1. 创建 GitHub 仓库

有两种方式：

**方式一：用户/组织网站（推荐）**
- 创建名为 `username.github.io` 的仓库
- 网站将在 `https://username.github.io` 访问

**方式二：项目网站**
- 创建任意名称的仓库，如 `my-blog`
- 网站将在 `https://username.github.io/my-blog` 访问

### 2. 推送代码到 GitHub

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: Cyril Mottier style blog"

# 添加远程仓库
git remote add origin https://github.com/username/repository-name.git

# 推送到 GitHub
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 **Settings** 选项卡
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 下选择 **Deploy from a branch**
5. 选择 **main** 分支和 **/ (root)** 文件夹
6. 点击 **Save**

### 4. 配置域名（可选）

如果你有自定义域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入你的域名，如 `blog.yourdomain.com`
3. 在域名提供商处配置 DNS：
   - 添加 CNAME 记录指向 `username.github.io`
   - 或添加 A 记录指向 GitHub Pages IP

## 本地开发

### 安装依赖

```bash
# 安装 Ruby 和 Bundler（如果没有）
# macOS
brew install ruby

# 安装项目依赖
bundle install --path vendor/bundle
```

### 启动开发服务器

```bash
# 使用脚本启动（推荐）
./start.sh

# 或手动启动
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

然后访问 `http://localhost:4000` 查看网站。

## 自定义配置

### 修改网站信息

编辑 `_config.yml` 文件：

```yaml
title: "你的名字"
description: "你的描述"
author: "你的名字"
email: "your.email@example.com"
url: "https://yourusername.github.io"
baseurl: ""  # 用户网站留空，项目网站填 "/repository-name"

# 社交媒体链接
social:
  twitter: "yourusername"
  github: "yourusername"
  linkedin: "yourusername"
```

### 修改样式

主要样式文件在 `assets/css/main.css`，你可以：
- 修改颜色变量
- 调整字体和间距
- 自定义深色主题

### 添加新文章

在 `_posts` 目录下创建新的 Markdown 文件：

```markdown
---
layout: post
title: "文章标题"
date: 2024-12-19 10:00:00 +0800
categories: [category1, category2]
tags: [tag1, tag2, tag3]
---

文章内容...
```

## 故障排除

### 常见问题

1. **网站没有更新**
   - 检查 GitHub Actions 是否成功运行
   - GitHub Pages 部署可能需要几分钟时间

2. **样式没有加载**
   - 检查 `_config.yml` 中的 `baseurl` 设置
   - 确保 CSS 文件路径正确

3. **本地开发出错**
   - 确保 Ruby 版本 >= 2.7
   - 删除 `Gemfile.lock` 后重新运行 `bundle install`

### 获取帮助

如果遇到问题，可以：
- 查看 [Jekyll 官方文档](https://jekyllrb.com/)
- 查看 [GitHub Pages 文档](https://docs.github.com/en/pages)
- 在 GitHub Issues 中提问

## 许可证

本项目基于 MIT 许可证开源。 