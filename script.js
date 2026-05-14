const btn = document.getElementById('theme-toggle');
const body = document.body;

btn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    btn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
