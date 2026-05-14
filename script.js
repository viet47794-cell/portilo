document.addEventListener("DOMContentLoaded", () => {
    
    /* --- 1. PRELOADER --- */
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        // Kích hoạt animation cho các thành phần đầu tiên sau khi load xong
        document.querySelector('.hero-content').classList.add('active');
    }, 2200);

    /* --- 2. CUSTOM CURSOR & DYNAMIC GLOW --- */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorGlow = document.querySelector('.cursor-glow');
    
    // Chỉ kích hoạt custom cursor trên màn hình lớn (Desktop)
    if(window.innerWidth > 768) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            // Cập nhật vị trí con trỏ nhỏ
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            // Cập nhật vị trí vùng sáng mờ (glow) theo thời gian thực
            // Dùng animate để tạo độ trễ mượt (lagging effect) cực kỳ premium
            cursorGlow.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Tương tác hover (phóng to con trỏ khi di vào nút bấm/link)
        const hoverElements = document.querySelectorAll('a, button, .tilt-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursorDot.style.transform = 'translate(-50%, -50%) scale(2.5)');
            el.addEventListener('mouseleave', () => cursorDot.style.transform = 'translate(-50%, -50%) scale(1)');
        });
    }

    /* --- 3. TYPING ANIMATION (Hero Subtitle) --- */
    const words = ["Web Developer.", "UI/UX Designer.", "Photographer.", "Creative Thinker."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeTarget = document.getElementById("typewriter");

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typeTarget.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typeTarget.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Dừng lại 2s khi gõ xong
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }
    setTimeout(typeEffect, 2500); // Bắt đầu gõ sau khi preloader kết thúc

    /* --- 4. SCROLL REVEAL (Intersection Observer) --- */
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15, // Kích hoạt khi 15% phần tử xuất hiện trên màn hình
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            
            // Nếu là counter (biểu đồ số), chạy hiệu ứng đếm số
            if(entry.target.querySelector('.counter')) {
                runCounters(entry.target);
            }
            observer.unobserve(entry.target); // Chỉ chạy 1 lần
        });
    }, revealOptions);

    reveals.forEach(reveal => revealObserver.observe(reveal));

    /* --- 5. NUMBER COUNTER ANIMATION --- */
    function runCounters(parent) {
        const counters = parent.querySelectorAll('.counter');
        const speed = 200; // Tốc độ đếm

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    /* --- 6. 3D TILT EFFECT (Hover Cards) --- */
    // Tạo hiệu ứng nghiêng thẻ 3D giống trang Apple/Framer
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if(window.innerWidth <= 768) return; // Tắt trên mobile
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // Tọa độ X của chuột trong thẻ
            const y = e.clientY - rect.top;  // Tọa độ Y của chuột trong thẻ
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Cường độ nghiêng (10 độ)
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.5s ease'; // Phục hồi mượt mà
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none'; // Tắt transition khi đang di chuột để tránh bị giật
        });
    });

    /* --- 7. STICKY NAVBAR GLOW ON SCROLL --- */
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.05)';
            nav.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.1)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.02)';
            nav.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.3)';
        }
    });

    /* --- 8. BACKGROUND PARTICLES (Vanilla JS Canvas) --- */
    // Tạo hệ thống hạt lơ lửng phía sau nền
    const canvas = document.getElementById("bg-canvas");
    const ctx = canvas.getContext("2d");
    let particlesArray = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        const numberOfParticles = (canvas.width * canvas.height) / 15000; // Mật độ hạt
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
});
