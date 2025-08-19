@echo off
chcp 65001 >nul
echo 🚀 欢迎使用个人博客启动脚本！
echo ==================================

REM 检查 Ruby 是否安装
ruby --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Ruby 未安装，请先安装 Ruby
    echo 请访问 https://rubyinstaller.org/ 下载安装
    pause
    exit /b 1
)

REM 检查 Jekyll 是否安装
jekyll --version >nul 2>&1
if errorlevel 1 (
    echo 📦 正在安装 Jekyll...
    gem install jekyll bundler
)

REM 检查依赖是否安装
if not exist "vendor" (
    echo 📚 正在安装依赖...
    bundle install
)

echo ✅ 环境检查完成！
echo.
echo 🌐 启动本地服务器...
echo 📱 在浏览器中访问: http://localhost:4000
echo ⏹️  按 Ctrl+C 停止服务器
echo.

REM 启动 Jekyll 服务器
bundle exec jekyll serve --livereload

pause 