const box = document.querySelector('.theme-checkbox');
const table = document.querySelector('.table');
const header = document.querySelector('.navbar div ul li a');
const header2 = document.querySelector('.navbar div ul .dropdown a');
const header3 = document.querySelector('.navbar div ul .nav-item .link');
const search = document.querySelector('.navbar div form input');
const svgFrame = document.querySelector('.svg-frame');

box.addEventListener("click", function(){
    var or = box.checked;
    let all = document.body;
    if(or == false) {
        all.classList.add('false');
        all.classList.remove('true');
        search.classList.add('bg-white');
        search.classList.remove('bg-dark');
        svgFrame.style.opacity = '0';
    } else {
        all.classList.add('true');
        all.classList.remove('false');
        search.classList.add('bg-dark');
        search.classList.remove('bg-white');
        svgFrame.style.opacity = '1';
    };
});

$('body').scrollspy({ target: '#navbar-example2', offset : 100 })