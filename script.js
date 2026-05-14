// 1. Tắt màn hình Loading khi web tải xong
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});

// 2. Hiệu ứng ánh sáng đi theo con trỏ chuột (Cinematic Cursor)
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    // Chỉ chạy hiệu ứng trên Desktop (màn hình lớn)
    if (window.innerWidth > 768) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    }
});

// Phóng to ánh sáng khi hover vào các thẻ có class 'glass-card' hoặc 'btn'
const hoverTargets = document.querySelectorAll('.glass-card, .btn');
hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursorGlow.style.width = '400px';
        cursorGlow.style.height = '400px';
        cursorGlow.style.background = 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(0,0,0,0) 70%)';
    });
    target.addEventListener('mouseleave', () => {
        cursorGlow.style.width = '300px';
        cursorGlow.style.height = '300px';
        cursorGlow.style.background = 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)';
    });
});

// 3. Scroll Reveal Animation (Thay thế cho Framer Motion)
// Tự động hiện các phần tử khi cuộn chuột tới
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100; // Khoảng cách từ dưới lên để bắt đầu hiện

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Chạy lần đầu khi vừa load trang

// 4. Hiệu ứng chạy số tự động cho phần Thống kê (Counter)
const counters = document.querySelectorAll('.counter');
const speed = 200; // Tốc độ chạy số

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            // Tính toán bước nhảy
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        // Kích hoạt chạy số khi cuộn tới phần Stats
        const statSection = document.getElementById('stats');
        const elementTop = statSection.getBoundingClientRect().top;
        if (elementTop < window.innerHeight) {
            updateCount();
        }
    });
}
window.addEventListener('scroll', animateCounters);
