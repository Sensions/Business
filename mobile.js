(function(){
    const burgerItem = document.querySelector('.header-burger');
    const menu = document.querySelector('.header-links-bg-fixed-mobile');
let menuCloseItem = document.querySelector(".header-nav-close-mobile");
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-links-bg-fixed-mobile-active');
    });
    menuCloseItem.addEventListener('click', () =>{
        menu.classList.remove('header-links-bg-fixed-mobile-active');
    })
}())

 