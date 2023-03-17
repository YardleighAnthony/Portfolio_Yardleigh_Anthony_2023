

/*let menu = document.querySelector('#menu-icon');
let naviBar = document.querySelector('.naviBar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    naviBar.classList.toggle('open');

}*/

//Sticky nav bar
/*Scoll section action*/
let sections = document.querySelectorAll('section')  ; 
let nav = document.querySelectorAll('header naviBar a')  ; 
//Sticky nav bar
window.onscroll = () =>{
sections.forEach(sec =>{

    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top>= offset && top < offset + height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header naviBar a[href*=' + id + ']').classList.add('active');
        });
    }
});

let header = document.querySelector('.header')
header.classList.toggle('sticky',window.scrollY > 100)

};
