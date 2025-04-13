// 轮播图功能
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;
    let slideInterval;

    // 显示指定的幻灯片
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    // 显示下一张幻灯片
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) next = 0;
        showSlide(next);
    }

    // 显示上一张幻灯片
    function prevSlide() {
        let prev = currentSlide - 1;
        if (prev < 0) prev = slides.length - 1;
        showSlide(prev);
    }

    // 设置自动轮播
    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 8000); // 将时间间隔调整为8秒
    }

    // 停止自动轮播
    function stopSlideInterval() {
        clearInterval(slideInterval);
    }

    // 点击事件监听
    prevBtn.addEventListener('click', function() {
        stopSlideInterval();
        prevSlide();
        startSlideInterval();
    });

    nextBtn.addEventListener('click', function() {
        stopSlideInterval();
        nextSlide();
        startSlideInterval();
    });

    // 点击指示器切换幻灯片
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            stopSlideInterval();
            showSlide(slideIndex);
            startSlideInterval();
        });
    });

    // 鼠标悬停时停止自动轮播
    document.querySelector('.carousel-container').addEventListener('mouseenter', stopSlideInterval);
    document.querySelector('.carousel-container').addEventListener('mouseleave', startSlideInterval);

    // 启动自动轮播
    startSlideInterval();
});


/*------------------------ */
// 为图片添加悬停提示效果
document.querySelectorAll('.side-image-container').forEach(container => {
    container.addEventListener('mousemove', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'image-tooltip';
        tooltip.textContent = '点击放大';
        // 添加工具提示定位逻辑...
    });
});

// 为特征列表添加交互动画
document.querySelectorAll('.feature-list li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(10px)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});