import "./style/main.css";
import Swiper, { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.header__nav');
const header = document.querySelector('header');

//MENU ACTION
hamburger.addEventListener('click', (event) => {
  hamburger.classList.toggle('active');
  if(hamburger.classList.contains('active')){
    overlay.classList.add('active');
    body.classList.add('overlay--active');
    navbar.classList.add('active');
  }
  else{
    overlay.classList.remove('active');
    body.classList.remove('overlay--active');
    navbar.classList.remove('active');
  }
});
overlay.addEventListener('click',()=>{
  overlay.classList.remove('active');
  body.classList.remove('overlay--active');
  navbar.classList.remove('active');
  hamburger.classList.remove('active');
});

// Scroll Event
document.addEventListener("scroll",()=>{
  let scrollPos = window.scrollY;
  if(scrollPos > 180)
      header.classList.add("scrolled");
  else header.classList.remove("scrolled");
  });

//Window Resize

window.addEventListener('resize', ()=>{
  let width = window.innerWidth;
  if(width> 768){
    overlay.classList.remove('active');
    body.classList.remove('overlay--active');
    navbar.classList.remove('active');
    hamburger.classList.remove('active');
    }
});
//INIT SWIPER
Swiper.use([Pagination]);
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    // when window width is >= 320px
    375:{
      slidesPerWiew:1,
      spaceBetween:10
    },
    768:{
      slidesPerView:3,
      spaceBetween:20
    }
  }
});
