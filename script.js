/**
 * THEME LOGIC
 */
function applyTheme(theme) {
    const body = document.body;
    const btn = document.getElementById('theme-btn');

    if (theme === 'light') {
        body.classList.add('light-mode');
        if (btn) {
            btn.innerHTML = "☀️ Light Mode";
            btn.classList.replace('btn-dark', 'btn-outline-dark');
        }
    } else {
        body.classList.remove('light-mode');
        if (btn) {
            btn.innerHTML = "🌙 Dark Mode";
            btn.classList.replace('btn-outline-dark', 'btn-dark');
        }
    }
}

function toggleTheme() {
    const isLight = document.body.classList.contains('light-mode');
    const newTheme = isLight ? 'dark' : 'light';
    
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
}

/**
 * PAGE INITIALIZATION
 */
document.addEventListener('DOMContentLoaded', function() {
    // 1. Apply theme immediately
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    // 2. Optimized Animation Logic (Updated for Summary Page)
    // We added .left-panel, .skill-item, and .resume-section to the list
    const itemsToAnimate = document.querySelectorAll('.feature, .carousel-item.active .work-card, .left-panel, .skill-item, .resume-section');
    
    itemsToAnimate.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)'; 
        item.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        item.style.transitionDelay = (index * 0.1) + 's'; // Staggered delay for a professional feel
        
        requestAnimationFrame(() => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        });
    });

    // 3. Fix: Ensure hidden carousel slides are visible when user clicks "Next"
    const hiddenCards = document.querySelectorAll('.carousel-item:not(.active) .work-card');
    hiddenCards.forEach(card => {
        card.style.opacity = '1';
    });
});

// Typing effect for Hello, I'm Jizryl S. Arboleda
const typingText = document.getElementById("typing-text");
const text = "Hello, I'm Jizryl S. Arboleda";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.innerHTML = text.substring(0, i + 1); // ← replaces instead of appends
        i++;
        setTimeout(typeWriter, 100);
    }
}
document.addEventListener("DOMContentLoaded", typeWriter);
