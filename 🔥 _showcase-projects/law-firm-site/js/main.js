const revealElements = document.querySelectorAll('.scroll-reveal');
const headerToogleIcon = document.querySelector('.header-toogle-icon');
const header = document.querySelector('header');
const xMark = document.querySelector('.fa-xmark');
const logo = document.querySelector('.logo');
const navLink = document.querySelectorAll('.navv-link');

function handleScrollReveal() {
    for (let el of revealElements) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('active');
        }
    }
}

headerToogleIcon.onclick = function() {
    header.style.width = "100%"
    header.style.padding = "3rem"
    setTimeout(() => {
        logo.style.opacity = "1";
        navLink[0].style.opacity = "1"
        navLink[0].style.transform = "translateY(0px)"
    }, 500);
    setTimeout(() => {
        navLink[1].style.opacity = "1"
        navLink[1].style.transform = "translateY(0px)"
    }, 600);
    setTimeout(() => {
        navLink[2].style.opacity = "1"
        navLink[2].style.transform = "translateY(0px)"
    }, 700);
    setTimeout(() => {
        navLink[3].style.opacity = "1"
        navLink[3].style.transform = "translateY(0px)"
    }, 800);
    setTimeout(() => {
        navLink[4].style.opacity = "1"
        navLink[4].style.transform = "translateY(0px)"
    }, 900);
}

xMark.onclick = function () {
    navLink[4].style.opacity = ""
    navLink[4].style.transform = ""
        logo.style.opacity = "";
    setTimeout(() => {
        navLink[3].style.opacity = ""
        navLink[3].style.transform = ""
    }, 100);
    setTimeout(() => {
        navLink[2].style.opacity = ""
        navLink[2].style.transform = ""
    }, 200);
    setTimeout(() => {
        navLink[1].style.opacity = ""
        navLink[1].style.transform = ""
    }, 300);
    setTimeout(() => {
        navLink[0].style.opacity = ""
        navLink[0].style.transform = ""
    }, 400);
    setTimeout(() => {
        header.style.width = ""
        header.style.padding = ""
    }, 500);
}

window.addEventListener('scroll', handleScrollReveal);
window.addEventListener('load', handleScrollReveal);

// const sections = document.querySelectorAll('section');

// sections.forEach((section) => {
//     if (section) {
        
//     }
// }