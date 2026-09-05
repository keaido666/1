function initNav(){
    const floatMenu = document.getElementById('floatMenu');
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle && floatMenu) {
        menuToggle.addEventListener('click', function () {
            floatMenu.classList.toggle('collapsed');
        });
    }

    // 新增：设置导航active高亮
    const links = document.querySelectorAll('.menu-link');
    const currentHref = window.location.href;
    links.forEach(link=>{
        // 去掉原有active
        link.classList.remove('active');
        // 判断当前页面url是否匹配导航a标签的href
        if(currentHref.includes(link.href)){
            link.classList.add('active');
        }
    })
}
