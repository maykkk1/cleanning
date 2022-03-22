const btn = document.querySelector('.menu-btn')
const mobileMenu = document.querySelector('nav')
let showMenu = false


btn.addEventListener("click", ()=>{
    if(!showMenu){
        btn.classList.add('open')
        mobileMenu.classList.add('mobile-menu')
        showMenu = true
    } else {
        btn.classList.remove('open')
        mobileMenu.classList.remove('mobile-menu')
        showMenu = false
    }
})