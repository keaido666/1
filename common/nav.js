// common/nav.js 悬浮导航公共脚本
document.addEventListener('DOMContentLoaded', function () {
    const floatMenu = document.getElementById('floatMenu');
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle && floatMenu) {
        menuToggle.addEventListener('click', function () {
            floatMenu.classList.toggle('collapsed');
        });
    }
});
