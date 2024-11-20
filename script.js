"use strict";
document.addEventListener("DOMContentLoaded", function () {
  // FAQ テキストの表示
  const faqTitles = document.querySelectorAll('.faq__title');
  faqTitles.forEach((faqTitle) => {
    faqTitle.addEventListener('click', (e) => {
      e.preventDefault();
      const content = faqTitle.nextElementSibling;
      faqTitle.classList.toggle('active');
      content.classList.toggle('open');
    });
  });

  const hamburger = document.querySelector(".header__hamburger");
  const navArea = document.querySelector('.header__navAreaWrapper')
  const nav = document.querySelector('.u-BG')
  const navItem = document.querySelectorAll('.header__navItem')

  hamburger.addEventListener('click',function(){
    navArea.classList.toggle('hamburgerOpen')
    nav.classList.toggle('navOpen')
  });

  navItem.forEach((el) => {
    el.addEventListener('click', (el) => {
      navArea.classList.remove('hamburgerOpen')
    })
  })

  // fade
  gsap.registerPlugin(ScrollTrigger);
  const fade = gsap.utils.toArray('.fade')
  
  fade.forEach(el => {
    gsap.fromTo(el, {
  
  y: 40, 
  opacity: 0, 
  duration: 2, 
  ease:'power4.inOut' },
  
  {
  y: 0, 
  opacity: 1, 
  duration: 1.5, 
  ease: 'power4.inout',
  
  scrollTrigger: {
    trigger: el,
    start: 'top 70%',
    // markers: true,
    },
  });
  });




  // **Swiper の初期化**
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', 
    loop: true,       
    speed: 1000,             
    slidesPerView: 5, 
  slidesPerGroup: 1,  
    loopAdditionalSlides: 2,
    autoplay: {
      delay: 3000,          
      disableOnInteraction: false, 
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      1000:{
        slidesPerView: 5, 
        slidesPerGroup: 1, 
      },
      720: {
        slidesPerView: 4, 
        slidesPerGroup: 1, 
      },
      375: {
        slidesPerView: 2, 
        slidesPerGroup: 1, 
      },
    },
  });
});
