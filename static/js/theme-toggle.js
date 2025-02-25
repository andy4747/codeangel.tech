const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}

themeToggle.addEventListener('click', () => {
    if (localStorage.theme === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

// Set initial theme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersDarkScheme.matches)) {
    setTheme('dark');
} else {
    setTheme('light');
}

// Listen for OS theme changes
prefersDarkScheme.addEventListener("change", (e) => {
    setTheme(e.matches ? 'dark' : 'light');
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('button[aria-label="Toggle Menu"]');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

