let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active');
}
window.onscroll =()=>{
    navbar.classList.remove('active')
}
let slide=document.querySelectorAll('.home .sliders-container .slide');
let index=0;
function next(){
    slide[index].classList.remove('active');
    index =(index+1)%slide.length;
    slide[index].classList.add('active')
}
function prev(){
    slide[index].classList.remove('active');
    index =(index-1+slide.length)%slide.length;
    slide[index].classList.add('active')
}
var swiper = new Swiper('.review-slider', {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay:7500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});