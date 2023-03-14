let menu = document.querySelector('#menu-icon');
let naviBar = document.querySelector('.naviBar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    naviBar.classList.toggle('open');

}