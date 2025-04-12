// static/js/section.js
document.addEventListener('DOMContentLoaded', () => {
    // 图片卡片延迟加载
    const lazyImages = document.querySelectorAll('.image-container img');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        img.dataset.src = img.src;
        img.src = 'placeholder.jpg';
        observer.observe(img);
    });
});