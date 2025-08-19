---
title: 个人博客
permalink: /blog/
---

# Cyril Mottier Style Blog

A minimalist personal blog inspired by [Cyril Mottier's website](https://cyrilmottier.com/), built with Jekyll and designed for GitHub Pages.

## Features

- **Clean, minimalist design** inspired by Cyril Mottier's aesthetic
- **Dark/Light theme toggle** with system preference detection
- **Responsive layout** that works on all devices
- **Fast loading** with optimized CSS and minimal JavaScript
- **SEO optimized** with proper meta tags and structured data
- **GitHub Pages ready** for easy deployment

## Quick Start

### Prerequisites

- Ruby 2.7 or higher
- Bundler gem

### Local Development

1. **Install dependencies:**
   ```bash
   bundle install --path vendor/bundle
   ```

2. **Start the development server:**
   ```bash
   ./start.sh
   ```
   
   Or manually:
   ```bash
   bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
   ```

3. **Open your browser and visit:**
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