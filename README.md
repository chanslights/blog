---
title: 个人博客
permalink: /blog/
---

# 个人博客

欢迎来到我的个人博客！这里记录了我的学习心得、技术分享和生活感悟。

## ✨ 博客特色

- 🎨 **现代化设计**: 响应式布局，支持各种设备访问
- 📱 **移动端友好**: 完美适配手机、平板、电脑
- 🏷️ **分类标签系统**: 文章按主题分类，支持多标签
- 🔍 **搜索功能**: 快速找到感兴趣的内容
- 📊 **阅读统计**: 显示文章阅读进度和统计信息
- 🌙 **暗色模式**: 支持明暗主题切换
- 📤 **社交分享**: 一键分享到各大社交平台

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/你的用户名/你的用户名.github.io.git
cd 你的用户名.github.io
```

### 2. 安装依赖

```bash
bundle install
```

### 3. 本地运行

```bash
bundle exec jekyll serve
```

然后在浏览器中访问 `http://localhost:4000` 查看博客。

### 4. 部署到 GitHub Pages

```bash
git add .
git commit -m "Initial blog setup"
git push origin main
```

详细部署指南请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)。

## 📁 项目结构

```
blog/
├── _config.yml          # Jekyll 配置文件
├── _layouts/            # 页面布局模板
│   ├── default.html     # 默认布局
│   ├── post.html        # 文章布局
│   ├── page.html        # 页面布局
│   ├── category.html    # 分类页面布局
│   └── tag.html         # 标签页面布局
├── _posts/              # 博客文章
│   ├── 2024-01-15-welcome-to-my-blog.md
│   └── 2024-01-16-how-to-write-blog-posts.md
├── _pages/              # 静态页面
│   ├── about.md         # 关于页面
│   ├── categories.md    # 分类页面
│   └── tags.md          # 标签页面
├── _plugins/            # Jekyll 插件
│   ├── category_generator.rb
│   └── tag_generator.rb
├── assets/              # 静态资源
│   ├── css/             # 样式文件
│   │   └── main.css
│   └── js/              # JavaScript 文件
│       └── main.js
├── Gemfile              # Ruby 依赖管理
├── .gitignore           # Git 忽略文件
└── README.md            # 项目说明
```

## 📝 写文章

### 创建新文章

在 `_posts` 目录下创建新的 Markdown 文件，文件名格式：`YYYY-MM-DD-文章标题.md`

### 文章头部信息

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

### 支持的功能

- **Markdown 语法**: 支持所有标准 Markdown 语法
- **代码高亮**: 自动语法高亮，支持多种编程语言
- **图片支持**: 支持图片懒加载和点击放大
- **目录生成**: 自动生成文章目录
- **数学公式**: 支持 LaTeX 数学公式（需要额外配置）

## 🎨 自定义主题

### 修改颜色

编辑 `assets/css/main.css` 文件中的 CSS 变量：

```css
:root {
    --primary-color: #3b82f6;    /* 主色调 */
    --secondary-color: #64748b;   /* 次要色调 */
    --accent-color: #f59e0b;     /* 强调色 */
    --text-primary: #1e293b;     /* 主要文字颜色 */
    --bg-primary: #ffffff;       /* 主要背景色 */
}
```

### 修改字体

在 `_layouts/default.html` 中更新 Google Fonts 链接：

```html
<link href="https://fonts.googleapis.com/css2?family=你的字体:weight@300;400;500;600;700&display=swap" rel="stylesheet">
```

### 添加新页面

1. 在 `_pages` 目录下创建新的 Markdown 文件
2. 添加适当的头部信息
3. 在导航菜单中添加链接

## 🔧 配置选项

### 基本设置

编辑 `_config.yml` 文件：

```yaml
title: 你的博客标题
description: 博客描述
author: 你的名字
email: your-email@example.com
url: "https://你的用户名.github.io"
baseurl: ""  # 如果使用自定义域名，这里留空
```

### 插件配置

```yaml
plugins:
  - jekyll-feed        # RSS 订阅
  - jekyll-seo-tag     # SEO 优化
  - jekyll-sitemap     # 网站地图
```

### 分页设置

```yaml
paginate: 10                    # 每页显示文章数
paginate_path: "/page/:num/"    # 分页路径
```

## 📱 响应式设计

博客完全支持响应式设计，包括：

- **桌面端**: 完整功能，最佳体验
- **平板端**: 适配中等屏幕尺寸
- **手机端**: 移动端优化，触摸友好

## 🌐 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📊 性能优化

- **图片懒加载**: 提升页面加载速度
- **CSS 压缩**: 减少文件大小
- **JavaScript 优化**: 异步加载，不阻塞渲染
- **CDN 支持**: 支持 CDN 加速

## 🔒 安全特性

- **XSS 防护**: 自动转义 HTML 内容
- **CSRF 保护**: 表单安全验证
- **内容安全策略**: 防止恶意脚本注入

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 提交 Issue

1. 使用 Issue 模板
2. 详细描述问题或建议
3. 提供复现步骤（如果是 bug）

### 提交 PR

1. Fork 本仓库
2. 创建功能分支
3. 提交更改
4. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Jekyll](https://jekyllrb.com/) - 静态网站生成器
- [GitHub Pages](https://pages.github.com/) - 免费托管服务
- [Font Awesome](https://fontawesome.com/) - 图标库
- [Google Fonts](https://fonts.google.com/) - 字体服务

## 📞 联系方式

- 📧 邮箱: [your-email@example.com](mailto:your-email@example.com)
- 🐙 GitHub: [你的用户名](https://github.com/你的用户名)
- 💼 LinkedIn: [你的LinkedIn](https://linkedin.com/in/你的用户名)

## 📚 相关资源

- [Jekyll 官方文档](https://jekyllrb.com/docs/)
- [GitHub Pages 文档](https://pages.github.com/)
- [Markdown 语法指南](https://www.markdownguide.org/)
- [CSS 教程](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

---

⭐ 如果这个项目对你有帮助，请给它一个星标！

*最后更新: 2024年1月16日*