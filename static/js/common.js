// 滚动头部效果
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.backgroundColor = window.scrollY > 100 
        ? 'rgba(139, 0, 0, 0.9)' 
        : '#8b0000';
});

// 图片懒加载
document.addEventListener('DOMContentLoaded', () => {
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
        img.src = 'assets/images/placeholder.jpg';
        observer.observe(img);
    });
});