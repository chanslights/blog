// 主要 JavaScript 功能

document.addEventListener('DOMContentLoaded', function() {
    // 移动端导航菜单切换
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // 平滑滚动到锚点
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 代码高亮
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        // 添加行号
        const lines = block.innerHTML.split('\n');
        if (lines.length > 1) {
            const lineNumbers = document.createElement('div');
            lineNumbers.className = 'line-numbers';
            lineNumbers.innerHTML = lines.map((_, i) => `<span>${i + 1}</span>`).join('');
            
            const wrapper = document.createElement('div');
            wrapper.className = 'code-wrapper';
            wrapper.appendChild(lineNumbers);
            wrapper.appendChild(block.cloneNode(true));
            
            block.parentNode.replaceChild(wrapper, block);
        }
    });
    
    // 图片懒加载
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // 返回顶部按钮
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        box-shadow: var(--shadow-md);
        transition: var(--transition);
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTop);
    
    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    // 返回顶部功能
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 搜索功能
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const posts = document.querySelectorAll('.post-card, .category-post-item, .tag-post-item');
            
            posts.forEach(post => {
                const title = post.querySelector('h3, h2').textContent.toLowerCase();
                const excerpt = post.querySelector('.post-excerpt, .post-excerpt')?.textContent.toLowerCase() || '';
                
                if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }
    
    // 标签云动画
    const tagItems = document.querySelectorAll('.tag-item');
    tagItems.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.classList.add('animate-tag');
    });
    
    // 文章阅读进度条
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--primary-color);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    // 更新阅读进度
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
    
    // 暗色模式切换
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
        });
        
        // 检查本地存储的暗色模式设置
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
    
    // 文章分享功能
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.href;
            const platform = this.classList.contains('twitter') ? 'Twitter' : 
                           this.classList.contains('facebook') ? 'Facebook' : 'LinkedIn';
            
            // 在新窗口打开分享链接
            window.open(url, '_blank', 'width=600,height=400');
        });
    });
    
    // 文章目录生成
    const generateTOC = () => {
        const headings = document.querySelectorAll('.post-content h1, .post-content h2, .post-content h3');
        if (headings.length < 3) return; // 如果标题少于3个，不生成目录
        
        const toc = document.createElement('div');
        toc.className = 'table-of-contents';
        toc.innerHTML = '<h3>目录</h3><ul></ul>';
        
        const tocList = toc.querySelector('ul');
        
        headings.forEach((heading, index) => {
            // 为标题添加ID
            if (!heading.id) {
                heading.id = `heading-${index}`;
            }
            
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent;
            link.className = `toc-${heading.tagName.toLowerCase()}`;
            
            listItem.appendChild(link);
            tocList.appendChild(listItem);
        });
        
        // 在文章开头插入目录
        const postContent = document.querySelector('.post-content');
        if (postContent) {
            postContent.insertBefore(toc, postContent.firstChild);
        }
    };
    
    // 如果当前页面是文章页面，生成目录
    if (document.querySelector('.post-content')) {
        generateTOC();
    }
    
    // 图片点击放大
    const postImages = document.querySelectorAll('.post-content img');
    postImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <img src="${this.src}" alt="${this.alt || '图片'}">
                    <span class="close">&times;</span>
                </div>
            `;
            
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
            `;
            
            document.body.appendChild(modal);
            
            // 关闭模态框
            modal.addEventListener('click', function(e) {
                if (e.target === modal || e.target.classList.contains('close')) {
                    document.body.removeChild(modal);
                }
            });
        });
    });
});

// 工具函数
const utils = {
    // 格式化日期
    formatDate: function(date) {
        const d = new Date(date);
        return d.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },
    
    // 截取文本
    truncateText: function(text, length) {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    },
    
    // 防抖函数
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// 导出工具函数供其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = utils;
} 