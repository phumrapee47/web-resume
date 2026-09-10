// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Load saved theme preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

function enableDarkMode() {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '☀️';
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    themeToggle.innerHTML = '🌙';
    localStorage.setItem('theme', 'light');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Initialize theme on page load
loadTheme();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Print functionality
function printResume() {
    window.print();
}

// Add keyboard shortcut for print (Ctrl+P handled by browser)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        printResume();
    }
});

// ==========================================
// Spotlight cursor effect (ambient + per-card)
// ==========================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    const spotlightLayer = document.getElementById('spotlight');
    let spotlightRAF = null;

    document.addEventListener('pointermove', (e) => {
        if (spotlightRAF) return;
        spotlightRAF = requestAnimationFrame(() => {
            if (spotlightLayer) {
                spotlightLayer.style.setProperty('--spot-x', `${e.clientX}px`);
                spotlightLayer.style.setProperty('--spot-y', `${e.clientY}px`);
                spotlightLayer.classList.add('is-active');
            }
            spotlightRAF = null;
        });
    });

    document.addEventListener('pointerleave', () => {
        if (spotlightLayer) spotlightLayer.classList.remove('is-active');
    });

    // Per-card spotlight (hover glow tracks pointer within the card)
    // ".spot" covers index.html cards; the rest cover project-detail.html pages.
    document.querySelectorAll('.spot, .feature-card, .metric-card, .flow-step, .architecture-box, .component-card').forEach(card => {
        card.addEventListener('pointermove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
            card.style.setProperty('--my', `${e.clientY - rect.top}px`);
        });
    });
}

// ==========================================
// Active section highlight in the rail nav
// ==========================================
const railLinks = document.querySelectorAll('.rail-link');
const navSections = document.querySelectorAll('main .section');

if (railLinks.length && navSections.length) {
    const linkFor = (id) => document.querySelector(`.rail-link[href="#${id}"]`);

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const link = linkFor(entry.target.id);
            if (!link) return;
            if (entry.isIntersecting) {
                railLinks.forEach(l => l.classList.remove('is-active'));
                link.classList.add('is-active');
            }
        });
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

    navSections.forEach(section => navObserver.observe(section));
}