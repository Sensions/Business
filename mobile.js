(function(){
     burgerItem = document.querySelector('.header-burger');
    let menu = document.querySelector('.header-links-bg-fixed-mobile');
    let menuCloseItem = document.querySelector(".header-nav-close-mobile");
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-links-bg-fixed-mobile-active');
        document.body.classList.add('overflow')
    })
    menuCloseItem.addEventListener('click', () =>{
        menu.classList.remove('header-links-bg-fixed-mobile-active');
        document.body.classList.remove('overflow')
    })

}())



 