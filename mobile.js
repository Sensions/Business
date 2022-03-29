(function(){
     let burgerItem = document.querySelector('.header-burger');
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
let header = document.getElementById('header')
window.onscroll = function(){
  if(window.pageYOffset > 400){
      header.classList.add('header-scrolled')
  }else{
      header.classList.remove('header-scrolled') 
  }
}



 