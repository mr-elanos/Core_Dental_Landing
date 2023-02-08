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
        
        767:{
            slidesPerView: 1,
        },
        1023:{
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
        767:{
            slidesPerView: 1,
        },
        1023:{
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
        767:{
            slidesPerView: 1,
        },
        1023:{
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