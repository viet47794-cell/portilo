// Hiệu ứng "bay lên mượt mà" lần lượt cho từng khối Bento khi mới mở web
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.bento-box');
    
    boxes.forEach((box, index) => {
        // Trạng thái ban đầu: Ẩn và thụt xuống dưới
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        box.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        
        // Hiển thị lần lượt nối tiếp nhau
        setTimeout(() => {
            box.style.opacity = '1';
            box.style.transform = 'translateY(0)';
        }, 120 * index); 
    });
});
