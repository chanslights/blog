#!/bin/bash

# 检查是否安装了 Ruby 和 Bundler
if ! command -v ruby &> /dev/null; then
    echo "❌ Ruby 未安装。请先安装 Ruby 2.7 或更高版本。"
    echo "   macOS: brew install ruby"
    echo "   Ubuntu: sudo apt-get install ruby-full"
    exit 1
fi

if ! command -v bundle &> /dev/null; then
    echo "❌ Bundler 未安装。正在安装..."
    gem install bundler
fi

echo "🚀 启动 Jekyll 开发服务器..."

# 安装依赖
echo "📦 安装依赖..."
bundle install --path vendor/bundle

# 启动 Jekyll 服务器
echo "🌐 启动本地服务器..."
echo "   访问地址: http://localhost:4000"
echo "   按 Ctrl+C 停止服务器"
echo ""

bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload --drafts 