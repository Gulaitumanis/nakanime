// toggle class active

const navMenu = document.querySelector

('.navmenu');

// Ketika hamburger menu di klik


document.querySelector('#hamburger-menu').
onclick = ()=> {
    navMenu.classList.toggle('active');
};


// klik diluar nav untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click',function(e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) 
    navMenu.classList.remove('active');
});