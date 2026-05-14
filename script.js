// Đổi giao diện
const btn = document.getElementById('theme-toggle');
const body = document.body;

btn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    
    // Đổi icon cho vui mắt (Hoa anh đào/Bông tuyết)
    btn.textContent = newTheme === 'dark' ? '🌸' : '❄️';
});

// Accordion đóng mở kỹ năng
const accordions = document.querySelectorAll('.accordion-btn');

accordions.forEach(acc => {
    acc.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        
        if (content.classList.contains('show')) {
            content.classList.remove('show');
        } else {
            content.classList.add('show');
        }
    });
});
