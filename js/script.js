const navbar = document.querySelector('.navbar');
const check = document.querySelector('#check');

window.addEventListener('scroll',()=>{
    if (window.scrollY >50) {
        navbar.classList.add('nav-scrolled');
    }else if (window.scrollY <=50) {
        navbar.classList.remove('nav-scrolled');
    }
});

function uncheck() {
    check.checked = false;
}
