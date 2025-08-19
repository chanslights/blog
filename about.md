---
layout: default
title: About
permalink: /about/
---

<div class="about-content">
    <header class="about-header">
        <h1>About Me</h1>
        <p class="about-intro">Hi, I'm Cyril Mottier, an Android developer and engineering leader passionate about building exceptional mobile experiences.</p>
    </header>

    <div class="about-sections">
        <section class="about-section">
            <h2>Background</h2>
            <p>I'm a seasoned Android developer with over a decade of experience in mobile development. I've been involved in the Android ecosystem since its early days, contributing to both open-source projects and commercial applications.</p>
            
            <p>My journey in mobile development started with a passion for creating intuitive user interfaces and has evolved into a deep understanding of mobile architecture, performance optimization, and team leadership.</p>
        </section>

        <section class="about-section">
            <h2>Expertise</h2>
            <div class="expertise-grid">
                <div class="expertise-item">
                    <h3>📱 Android Development</h3>
                    <p>Native Android development with Kotlin and Java, focusing on modern architecture patterns and best practices.</p>
                </div>
                
                <div class="expertise-item">
                    <h3>🏗️ Architecture</h3>
                    <p>Designing scalable mobile applications using MVVM, Clean Architecture, and modern Android Architecture Components.</p>
                </div>
                
                <div class="expertise-item">
                    <h3>👥 Team Leadership</h3>
                    <p>Leading engineering teams, mentoring developers, and establishing development processes that scale.</p>
                </div>
                
                <div class="expertise-item">
                    <h3>⚡ Performance</h3>
                    <p>Optimizing app performance, memory management, and creating smooth user experiences.</p>
                </div>
            </div>
        </section>

        <section class="about-section">
            <h2>Open Source</h2>
            <p>I believe in giving back to the developer community. Over the years, I've contributed to various open-source projects and created libraries that help other developers build better Android applications.</p>
            
            <p>Some of my notable contributions include UI components, development tools, and educational resources for the Android community.</p>
        </section>

        <section class="about-section">
            <h2>Speaking & Writing</h2>
            <p>I regularly speak at conferences and meetups about Android development, mobile architecture, and engineering leadership. I also write about these topics on my blog and contribute to various publications.</p>
            
            <p>If you're interested in having me speak at your event or collaborate on content, feel free to reach out.</p>
        </section>

        <section class="about-section">
            <h2>Connect</h2>
            <p>I'm always interested in connecting with fellow developers, discussing mobile technology, or exploring potential collaborations.</p>
            
            <div class="contact-links">
                <a href="https://twitter.com/cyrilmottier" target="_blank" rel="noopener noreferrer" class="contact-link">
                    <span class="contact-icon">🐦</span>
                    <span class="contact-text">Follow me on Twitter</span>
                </a>
                
                <a href="https://github.com/cyrilmottier" target="_blank" rel="noopener noreferrer" class="contact-link">
                    <span class="contact-icon">💻</span>
                    <span class="contact-text">Check out my GitHub</span>
                </a>
                
                <a href="https://linkedin.com/in/cyrilmottier" target="_blank" rel="noopener noreferrer" class="contact-link">
                    <span class="contact-icon">💼</span>
                    <span class="contact-text">Connect on LinkedIn</span>
                </a>
                
                <a href="mailto:hello@cyrilmottier.com" class="contact-link">
                    <span class="contact-icon">✉️</span>
                    <span class="contact-text">Send me an email</span>
                </a>
            </div>
        </section>
    </div>
</div>

<style>
.about-content {
    max-width: var(--max-width-wide);
    margin: 0 auto;
}

.about-header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
    padding-bottom: var(--spacing-xl);
    border-bottom: 1px solid var(--color-border-light);
}

.about-header h1 {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    margin-bottom: var(--spacing-lg);
    color: var(--color-text);
}

.about-intro {
    font-size: var(--font-size-xl);
    color: var(--color-text-secondary);
    line-height: var(--line-height-relaxed);
    max-width: 36rem;
    margin: 0 auto;
}

.about-sections {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3xl);
}

.about-section h2 {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    margin-bottom: var(--spacing-lg);
    color: var(--color-text);
}

.about-section p {
    font-size: var(--font-size-base);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-md);
}

.expertise-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-xl);
    margin-top: var(--spacing-lg);
}

.expertise-item {
    padding: var(--spacing-lg);
    background-color: var(--color-bg-secondary);
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-border);
    transition: all 0.2s ease;
}

.expertise-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.expertise-item h3 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    color: var(--color-text);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.expertise-item p {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    color: var(--color-text-secondary);
    margin-bottom: 0;
}

.contact-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
}

.contact-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-lg);
    background-color: var(--color-bg-secondary);
    color: var(--color-text);
    text-decoration: none;
    border-radius: var(--border-radius);
    border: 1px solid var(--color-border);
    transition: all 0.2s ease;
}

.contact-link:hover {
    background-color: var(--color-accent);
    color: white;
    border-color: var(--color-accent);
    transform: translateY(-1px);
}

.contact-icon {
    font-size: var(--font-size-lg);
}

.contact-text {
    font-weight: 500;
}

@media (max-width: 768px) {
    .about-header h1 {
        font-size: var(--font-size-3xl);
    }
    
    .about-intro {
        font-size: var(--font-size-lg);
    }
    
    .expertise-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
    }
    
    .contact-links {
        grid-template-columns: 1fr;
    }
}
</style> 