// common/nav.js
function initNav(){
    const floatMenu = document.getElementById('floatMenu');
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle && floatMenu) {
        menuToggle.addEventListener('click', function () {
            floatMenu.classList.toggle('collapsed');
        });
    }
}
