let sideBar = document.querySelector('#side-bar');

document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active');
}

document.querySelector('#close-side-bar').onclick = () => {
    sideBar.classList.remove('active');
}

/********************************
        SEARCH FROM STYLE
*********************************/

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
};

window.onscroll = () =>{
    searchForm.classList.remove('active');
};

/********************************
        CLICK EVENT STYLE
*********************************/

document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});

/********************************
        SLIDER STYLE
*********************************/
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/********************************
        SLIDER STYLE
*********************************/
