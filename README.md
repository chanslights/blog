# Cyril Mottier 风格个人博客

一个受 [Cyril Mottier 网站](https://cyrilmottier.com/) 启发的极简主义个人博客，使用 Jekyll 构建，专为 GitHub Pages 设计。

## 特性

- **简洁极简设计** - 受 Cyril Mottier 美学启发
- **深浅主题切换** - 支持系统偏好检测
- **响应式布局** - 在所有设备上完美显示
- **快速加载** - 优化的 CSS 和最少的 JavaScript
- **SEO 优化** - 完善的 meta 标签和结构化数据
- **GitHub Pages 就绪** - 一键部署

## 快速开始

### 环境要求

- Ruby 2.7 或更高版本
- Bundler gem

### 本地开发

1. **安装依赖：**
   ```bash
   bundle install --path vendor/bundle
   ```

2. **启动开发服务器：**
   ```bash
   ./start.sh
   ```
   
   或手动启动：
   ```bash
   bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
   ```

3. **打开浏览器访问：**
   ```
   http://localhost:4000
   ```

### GitHub Pages Deployment

1. **Fork or clone this repository**

2. **Update the configuration:**
   - Edit `_config.yml` to update site title, author, and URL
   - Modify the `url` and `baseurl` settings for your GitHub Pages setup

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch" as source
   - Choose "main" branch and "/ (root)" folder
   - Save the settings

4. **Your site will be available at:**
   ```
   https://yourusername.github.io/your-repository-name
   ```

## Customization

### Site Configuration

Edit `_config.yml` to customize:
- Site title and author information
- Social media links
- SEO settings
- Navigation menu items

### Styling

The main stylesheet is located at `assets/css/main.css`. Key customization areas:

- **Colors:** Modify the CSS variables in the `:root` section
- **Typography:** Update font families and sizes
- **Layout:** Adjust spacing and container widths
- **Dark theme:** Customize the `[data-theme="dark"]` section

### Content

- **Posts:** Add new blog posts to the `_posts/` directory
- **Pages:** Create new pages in the `_pages/` directory
- **About page:** Edit `_pages/about.md` to customize your bio

### Navigation

Update the navigation in `_layouts/default.html` to add or remove menu items.

## File Structure

```
├── _config.yml          # Site configuration
├── _layouts/            # HTML templates
│   ├── default.html     # Base layout
│   ├── post.html        # Blog post layout
│   └── page.html        # Static page layout
├── _pages/              # Static pages
│   └── about.md         # About page
├── _posts/              # Blog posts
├── assets/              # CSS, JS, and images
│   ├── css/main.css     # Main stylesheet
│   └── js/main.js       # JavaScript functionality
├── index.html           # Homepage
└── README.md            # This file
```

## Writing Posts

Create new posts in the `_posts/` directory with the following format:

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-15 10:00:00 +0800
categories: [category1, category2]
tags: [tag1, tag2, tag3]
---

Your post content here...
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Design inspired by [Cyril Mottier](https://cyrilmottier.com/)
- Built with [Jekyll](https://jekyllrb.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)