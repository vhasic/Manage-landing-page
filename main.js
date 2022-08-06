const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");

/* On mobile screens when hamburger icon is clicked show or hide nav list */
navToggle.addEventListener('click', ()=>{
    // primaryNav.classList.toggle('opened');

    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true) ;
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
    if (iconHamburger.style.display === "none"){
        iconHamburger.style.display="block"
        iconClose.style.display="none"
    } else {
        iconHamburger.style.display="none"
        iconClose.style.display="block" 
    }
})