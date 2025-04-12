// 导航链接的点击事件
document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // 阻止默认行为
        e.preventDefault();
        
        // 移除所有链接的active类
        document.querySelectorAll('.navbar-link').forEach(item => {
            item.classList.remove('active');
        });
        
        // 为当前点击的链接添加active类
        this.classList.add('active');
    });
});

// CTA按钮的点击事件
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        alert('感谢您的关注！更多内容即将推出。');
    });
});

// 页面滚动时的动效
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // 动态调整导航栏阴影
    if (scrollPosition > 50) {
        document.querySelector('.navbar').style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        document.querySelector('.navbar').style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
    }
    
    // 这里可以添加滚动时的其他动效
});

