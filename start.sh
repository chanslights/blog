#!/bin/bash

# 检查是否安装了 bundler
if ! command -v bundle &> /dev/null; then
    echo "Bundler 未安装，请先运行: gem install bundler"
    exit 1
fi

# 安装依赖
echo "安装 Jekyll 依赖..."
bundle install --path vendor/bundle

# 启动 Jekyll 服务器
echo "启动 Jekyll 服务器..."
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload 