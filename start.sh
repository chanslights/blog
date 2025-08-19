#!/bin/bash

echo "🚀 欢迎使用个人博客启动脚本！"
echo "=================================="

# 检查 Ruby 是否安装
if ! command -v ruby &> /dev/null; then
    echo "❌ Ruby 未安装，请先安装 Ruby"
    echo "macOS: brew install ruby"
    echo "Ubuntu/Debian: sudo apt install ruby-full"
    echo "Windows: 下载 RubyInstaller"
    exit 1
fi

# 检查 Jekyll 是否安装
if ! command -v jekyll &> /dev/null; then
    echo "📦 正在安装 Jekyll..."
    gem install jekyll bundler
fi

# 检查依赖是否安装
if [ ! -d "vendor" ]; then
    echo "📚 正在安装依赖..."
    bundle install
fi

echo "✅ 环境检查完成！"
echo ""
echo "🌐 启动本地服务器..."
echo "📱 在浏览器中访问: http://localhost:4000"
echo "⏹️  按 Ctrl+C 停止服务器"
echo ""

# 启动 Jekyll 服务器
bundle exec jekyll serve --livereload 