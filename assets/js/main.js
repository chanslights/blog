/**
 * Main JavaScript functionality for the blog
 * Handles theme toggling and other interactive features
 */

(function() {
    'use strict';

    // Theme management
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Initialize theme
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            html.setAttribute('data-theme', savedTheme);
        } else if (systemPrefersDark) {
            html.setAttribute('data-theme', 'dark');
        } else {
            html.setAttribute('data-theme', 'light');
        }
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add a subtle animation
        html.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            html.style.transition = '';
        }, 300);
    }

    // Listen for system theme changes
    function watchSystemTheme() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addListener((e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Add loading state to external links
    function initExternalLinks() {
        const externalLinks = document.querySelectorAll('a[href^="http"]');
        externalLinks.forEach(link => {
            // Add external link indicator
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            
            // Add loading state on click
            link.addEventListener('click', () => {
                link.style.opacity = '0.7';
                setTimeout(() => {
                    link.style.opacity = '';
                }, 500);
            });
        });
    }

    // Keyboard navigation
    function initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Toggle theme with 'T' key
            if (e.key.toLowerCase() === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
                // Only if not in an input field
                if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
                    e.preventDefault();
                    toggleTheme();
                }
            }
        });
    }

    // Add subtle animations to elements
    function initAnimations() {
        // Fade in animation for posts
        const posts = document.querySelectorAll('.post-item');
        posts.forEach((post, index) => {
            post.style.opacity = '0';
            post.style.transform = 'translateY(20px)';
            post.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                post.style.opacity = '1';
                post.style.transform = 'translateY(0)';
            }, index * 100 + 100);
        });

        // Hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-1px)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = '';
            });
        });
    }

    // Performance optimization: Debounce function
    function debounce(func, wait) {
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

    // Handle scroll events (debounced)
    function initScrollEffects() {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    const header = document.querySelector('.site-header');
                    
                    // Add subtle shadow to header when scrolled
                    if (scrolled > 10) {
                        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                    } else {
                        header.style.boxShadow = '';
                    }
                    
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Initialize all functionality when DOM is ready
    function init() {
        // Core functionality
        initTheme();
        watchSystemTheme();
        
        // Event listeners
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
        
        // Enhanced features
        initSmoothScrolling();
        initExternalLinks();
        initKeyboardNavigation();
        initScrollEffects();
        
        // Visual enhancements
        setTimeout(initAnimations, 100);
        
        console.log('Blog initialized successfully! 🎉');
        console.log('Tip: Press "T" to toggle theme');
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose theme toggle function globally for potential use
    window.toggleTheme = toggleTheme;

})(); 