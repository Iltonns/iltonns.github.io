// Mobile-specific enhancements for better UX
document.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;

    // Mobile touch improvements for better feedback
    if ('ontouchstart' in window) {
        // Add touch-active class for better mobile feedback
        document.querySelectorAll('.btn, .nav-link, .project-card, .skill-category').forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            }, { passive: true });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }, { passive: true });
        });
    }

    // Detect mobile orientation changes
    window.addEventListener('orientationchange', () => {
        // Close mobile menu on orientation change
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle?.querySelector('i');
            if (icon) {
                icon.classList.replace('fa-times', 'fa-bars');
            }
            body.style.overflow = '';
        }
        
        // Recalculate heights and positions after orientation change
        setTimeout(() => {
            window.scrollTo(0, window.scrollY);
        }, 300);
    });

    // Add viewport height fix for mobile browsers (100vh issue)
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVH();
    window.addEventListener('resize', setVH);

    // Improve scroll performance on mobile
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            // Scroll actions here
        });
    }, { passive: true });

    // Prevent zoom on double tap for specific elements
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Add swipe to close menu functionality
    if (navMenu && mobileMenuToggle) {
        let touchStartX = 0;
        let touchEndX = 0;
        
        navMenu.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        navMenu.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            // Swipe up to close
            if (touchStartX - touchEndX < -50 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.replace('fa-times', 'fa-bars');
                }
                body.style.overflow = '';
            }
        }
    }

    // Optimize images for mobile
    if (window.innerWidth <= 768) {
        document.querySelectorAll('img').forEach(img => {
            // Add loading="lazy" if not already set
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
    }

    // Fix sticky header on iOS
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });

    // Improve form UX on mobile
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        // Prevent zoom on focus for iOS
        input.addEventListener('focus', () => {
            if (window.innerWidth < 768) {
                const viewport = document.querySelector('meta[name="viewport"]');
                if (viewport) {
                    const originalContent = viewport.getAttribute('content');
                    viewport.setAttribute('content', originalContent + ', maximum-scale=1.0');
                    
                    input.addEventListener('blur', () => {
                        viewport.setAttribute('content', originalContent);
                    }, { once: true });
                }
            }
        });
    });

    // Add safe area padding for notched devices
    if (CSS.supports('padding-top: env(safe-area-inset-top)')) {
        document.documentElement.style.setProperty('--safe-area-top', 'env(safe-area-inset-top)');
        document.documentElement.style.setProperty('--safe-area-bottom', 'env(safe-area-inset-bottom)');
    }
});
