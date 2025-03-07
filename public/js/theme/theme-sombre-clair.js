document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    let isDarkMode = localStorage.getItem('theme') === 'dark';

    if (isDarkMode) {
        html.classList.add('dark');
    }
    let animation = lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: false, 
        autoplay: false, 
        path: '../json/clair-sombre.json' 
    });
    animation.addEventListener('DOMLoaded', function () {
        animation.goToAndStop(isDarkMode ? 14 : 0, true); // 14 : mode sombre, 0 : mode clair
    });
    toggle.addEventListener('click', function () {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            animation.playSegments([0, 14], true); 
            html.classList.add('dark'); 
            localStorage.setItem('theme', 'dark'); 
        } else {
            animation.playSegments([14, 0], true);
            html.classList.remove('dark'); 
            localStorage.setItem('theme', 'light');
        }
    });
    animation.addEventListener('complete', function () {
        animation.goToAndStop(isDarkMode ? 14 : 0, true);
    });
});
