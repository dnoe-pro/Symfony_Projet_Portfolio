document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
    }
    toggle.addEventListener('click', function () {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});



