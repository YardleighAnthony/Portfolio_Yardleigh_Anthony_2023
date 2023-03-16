

/*let menu = document.querySelector('#menu-icon');
let naviBar = document.querySelector('.naviBar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    naviBar.classList.toggle('open');

}*/

//Sticky nav bar
window.onscroll = () =>{
let header = document.querySelector('.header')
header.classList.toggle('sticky',window.scrollY > 100)};
