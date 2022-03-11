//===================// navbar //===================//
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav-link')
const nav = document.querySelector('.nav')
function removeAllActiveLinks() {
    const activeLink = document.querySelector('.nav .nav-link.active-link')
    activeLink.classList.remove('active-link')
}
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        removeAllActiveLinks()
        link.classList.add('active-link')
    })
});
navToggle.addEventListener('click', () => {
    const closeToggle = document.querySelector('.nav-close');
    nav.classList.add('active')
    closeToggle.addEventListener('click', () => {
        nav.classList.remove('active')
    })
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active')
        })
    })
})

//===================// Theme Toggle //===================//
const bodyElement = document.body
const themeToggle = document.querySelector('#theme-toggle-btn')
const currentTheme = localStorage.getItem('currentTheme')
if (currentTheme) {
    bodyElement.classList.add('light-theme')
}
themeToggle.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme')

    if (bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive')
    } else {
        localStorage.removeItem('currentTheme')
    }
})

//===================// Search //===================//
const searchOpenBtn = document.querySelector('#search')
const searchCloseBtn = document.querySelector('#search-form-btn')
const searchForm = document.querySelector('#search-form-container')
searchOpenBtn.addEventListener('click', () => {
    searchForm.classList.add('active')
    searchCloseBtn.addEventListener('click', () => {
        searchForm.classList.remove('active')
    })
    window.addEventListener('keyup', event => {
        if (event.key === 'Escape') {
            searchForm.classList.remove('active')
        }
    })
})

//===================// Swiper //===================//
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
});