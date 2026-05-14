document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ÁNH SÁNG THEO CHUỘT (Mouse Glow)
    const glow = document.querySelector('.mouse-glow');
    
    document.addEventListener('mousemove', (e) => {
        // Cập nhật vị trí ánh sáng bám sát chuột
        requestAnimationFrame(() => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });
    });

    // Phóng to ánh sáng khi trỏ vào nút hoặc card (Hiệu ứng từ tính)
    const hoverElements = document.querySelectorAll('a, .btn, .glass-panel, .skill-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            glow.style.transform = 'translate(-50%, -50%) scale(1.5)';
            glow.style.background = 'radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, transparent 60%)';
        });
        el.addEventListener('mouseleave', () => {
            glow.style.transform = 'translate(-50%, -50%) scale(1)';
            glow.style.background = 'radial-gradient(circle, rgba(112, 0, 255, 0.15) 0%, rgba(0,240,255,0.05) 40%, transparent 70%)';
        });
    });

    // 2. NAVBAR SCROLL (Đổi nền thanh menu khi cuộn)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. HAMBURGER MENU CHO MOBILE
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Tạo hiệu ứng chéo vạch (X) cho hamburger
        hamburger.classList.toggle('toggle');
    });

    // Đóng menu khi bấm vào link trên mobile
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 4. HIỆU ỨNG XUẤT HIỆN KHI CUỘN (Scroll Reveal bằng Intersection Observer - Tối ưu hiệu năng)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15, // Kích hoạt khi 15% phần tử xuất hiện
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Chỉ chạy 1 lần
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 5. HIỆU ỨNG ĐẾM SỐ (Animated Counter)
    const counters = document.querySelectorAll('.counter');
    let counted = false; // Đảm bảo chỉ đếm 1 lần

    const countUp = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const speed = 50; // Tốc độ chạy (càng nhỏ càng nhanh)
            
            const updateCount = () => {
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + (target === 15 ? '+' : ''); // Thêm dấu + cho đẹp
                }
            };
            updateCount();
        });
    }

    // Kích hoạt đếm số khi cuộn tới Stats section
    const statsSection = document.getElementById('stats');
    const statsObserver = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting && !counted) {
            countUp();
            counted = true;
        }
    }, { threshold: 0.5 });

    if(statsSection) {
        statsObserver.observe(statsSection);
    }
});
