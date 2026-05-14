// 1. CUSTOM CURSOR LOGIC
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let posX = 0, posY = 0;
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // Cập nhật ngay lập tức cho chấm nhỏ
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
});

// Animation loop để tạo độ trễ (trailing) cho vòng tròn lớn
function updateFollower() {
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;
    follower.style.left = `${posX}px`;
    follower.style.top = `${posY}px`;
    requestAnimationFrame(updateFollower);
}
updateFollower();

// Phóng to cursor khi hover vào nút
const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => follower.style.transform = 'translate(-50%, -50%) scale(1.5)');
    link.addEventListener('mouseleave', () => follower.style.transform = 'translate(-50%, -50%) scale(1)');
});


// 2. THEME SWITCHER
const themeBtn = document.getElementById('theme-btn');
const btnText = themeBtn.querySelector('.btn-text');
themeBtn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    btnText.textContent = isDark ? 'NIGHT' : 'DAY';
});


// 3. TYPEWRITER EFFECT
const texts = ["Frontend Development", "Graphic Design", "UI/UX Architecture"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typeTarget = document.getElementById('typewriter');

(function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    typeTarget.textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Đợi 2s trước khi gõ chữ mới
    } else {
        setTimeout(type, 100);
    }
}());


// 4. INTERSECTION OBSERVER (Hiệu ứng cuộn trang)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            
            // Kích hoạt thanh tiến trình SVG khi cuộn tới
            const circles = entry.target.querySelectorAll('.progress');
            circles.forEach(circle => {
                const percent = circle.parentElement.parentElement.getAttribute('data-percent');
                const offset = 283 - (283 * percent) / 100;
                circle.style.strokeDashoffset = offset;
            });
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.section').forEach((el) => observer.observe(el));


// 5. 3D TILT EFFECT CHO PORTFOLIO CARDS
const cards = document.querySelectorAll('.tilt-card');
cards.forEach(card => {
    const inner = card.querySelector('.card-inner');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Tọa độ X trong card
        const y = e.clientY - rect.top;  // Tọa độ Y trong card
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Tính toán góc nghiêng (Math.abs để giới hạn độ nghiêng max)
        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;
        
        inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        // Reset về vị trí cũ khi chuột rời đi
        inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
});


// 6. ISOTOPE FILTER LOGIC (Lọc dự án)
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Xóa class active
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 50);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 300);
            }
        });
    });
});
