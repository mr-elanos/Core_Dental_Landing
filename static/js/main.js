new Swiper('.discover__swiper', {
    pagination: {
        el: '.discover__swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.discover__swiper-button-next',
        prevEl: '.discover__swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        
        768:{
            slidesPerView: 1,
        },
        1024:{
            slidesPerView: 4,
        },
        1440:{
            slidesPerView: 5,
        },
        1920:{
            slidesPerView: 6,
        }
    },
    loop: true,
    speed: 500,
    spaceBetween: 15,
    grabCursor: true,
});

new Swiper('.why__swiper', {
    pagination: {
        el: '.why__swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.why__swiper-button-next',
        prevEl: '.why__swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        768:{
            slidesPerView: 1,
        },
        1024:{
            slidesPerView: 3,
        },
        1920:{
            slidesPerView: 4,
        }
    },
    loop: true,
    speed: 500,
    spaceBetween: 60,
    grabCursor: true,
});

new Swiper('.patients__swiper', {
    pagination: {
        el: '.patients__swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.patients__swiper-button-next',
        prevEl: '.patients__swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        768:{
            slidesPerView: 1,
        },
        1024:{
            slidesPerView: 2,
        },
        1350:{
            slidesPerView: 3,
        },
    },
    loop: true,
    speed: 500,
    spaceBetween: 60,
    grabCursor: true,
});

let tab = document.querySelector('.hide');
document.querySelector('.tab-btn').addEventListener('click', function(e){
    if (tab.classList.contains('active')){
        tab.classList.remove('active');
        this.innerHTML = 'Read more';
    } else {
        tab.classList.add('active');
        this.textContent= 'Less';
    };
});

//burger menu
let menuBtn = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__burger-menu');
let navBtns = document.querySelectorAll('#burger-btn')
let body = document.querySelector('body');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('header__burger-btn-active');
	menu.classList.toggle('header__burger-menu-active');
    body.classList.toggle('scroll__hidden');
})
navBtns.forEach(btn =>{
    btn.addEventListener('click', function(e){
        menuBtn.classList.remove('header__burger-btn-active');
        menu.classList.remove('header__burger-menu-active');
        body.classList.remove('scroll__hidden');
    })
})

let popupBtns = document.querySelectorAll('.popup');
let popupForm = document.querySelector('.form__wrapper');

popupBtns.forEach(btn =>{
    btn.addEventListener('click', function(e){
        popupForm.classList.add('form__wrapper-active');
        body.classList.toggle('scroll__hidden');
    });
});
document.querySelector('.popup_close').addEventListener('click', function(e){
    popupForm.classList.remove('form__wrapper-active');
    body.classList.remove('scroll__hidden');
})