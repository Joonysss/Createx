
import Swiper, { Navigation } from 'swiper';

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
const portSlider = document.querySelector('.portfolio-section__items');
const relatedSlider = document.querySelector('.related-projects__items');


if (portSlider) {
  Swiper.use([Navigation]);
  const portfolioSlider = new Swiper('.portfolio-section__items', {
  slidesPerView: 3,
  spaceBetween: gap,
  navigation: {
    nextEl: ".potfolio-section__next",
    prevEl: ".potfolio-section__prev"
  },
  on: {
    init: function () {
      const activeSlide = portSlider.querySelector('.swiper-slide-active');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActive = nextActiveSlide.nextElementSibling;
      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActive.classList.add('slider-visible');
    },
  }
});



document.querySelector('.potfolio-section__next').addEventListener('click', function() {
  const activeSlide = portSlider.querySelector('.swiper-slide-active');
  const nextActiveSlide = activeSlide.nextElementSibling;
  const nextNextActive = nextActiveSlide.nextElementSibling;

 
 
  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach( el => {
    el.classList.remove('slider-visible');
  });

  activeSlide.classList.add('slider-visible');
  nextActiveSlide.classList.add('slider-visible');
  nextNextActive.classList.add('slider-visible');
})

document.querySelector('.potfolio-section__prev').addEventListener('click', function() {
  const activeSlide = portSlider.querySelector('.swiper-slide-next');

  document.querySelectorAll('.portfolio-section__items .swiper-slide').forEach( el => {
    el.classList.remove('slider-visible');
  });
  
  if(activeSlide.previousElementSibling ) {
   const nextActiveSlide = activeSlide.previousElementSibling;
   activeSlide.classList.add('slider-visible');
   activeSlide.nextElementSibling.classList.add('slider-visible');
   nextActiveSlide.classList.add('slider-visible');

 }

})
}

if (relatedSlider) {
  Swiper.use([Navigation]);
  const relatedProjSlider = new Swiper(relatedSlider, {
  slidesPerView: 3,
  spaceBetween: gap,
  navigation: {
    nextEl: ".related-projects__next",
    prevEl: ".related-projects__prev"
  },
  on: {
    init: function () {
      const activeSlide = relatedSlider.querySelector('.swiper-slide-active');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActive = nextActiveSlide.nextElementSibling;
      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActive.classList.add('slider-visible');
    },
  }
});



document.querySelector('.related-projects__next').addEventListener('click', function() {
  const activeSlide = relatedSlider.querySelector('.swiper-slide-active');
  const nextActiveSlide = activeSlide.nextElementSibling;
  const nextNextActive = nextActiveSlide.nextElementSibling;

 
 
  document.querySelectorAll('.related-projects__items .swiper-slide').forEach( el => {
    el.classList.remove('slider-visible');
  });

  activeSlide.classList.add('slider-visible');
  nextActiveSlide.classList.add('slider-visible');
  nextNextActive.classList.add('slider-visible');
})

document.querySelector('.related-projects__prev').addEventListener('click', function() {
  const activeSlide = relatedSlider.querySelector('.swiper-slide-next');

  document.querySelectorAll('.related-projects__items .swiper-slide').forEach( el => {
    el.classList.remove('slider-visible');
  });
  
  if(activeSlide.previousElementSibling ) {
   const nextActiveSlide = activeSlide.previousElementSibling;
   activeSlide.classList.add('slider-visible');
   activeSlide.nextElementSibling.classList.add('slider-visible');
   nextActiveSlide.classList.add('slider-visible');

 }

})
}

const testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".testimonials__next",
    prevEl: ".testimonials__prev"
  },
});
