
import Swiper, { Navigation, Thumbs } from 'swiper';

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
const portSlider = document.querySelector('.portfolio-section__items');
const relatedSlider = document.querySelector('.related-projects__items');
const testimonialsSlider = document.querySelector('.testimonials__items');


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
if (testimonialsSlider) {
  Swiper.use([Navigation]);
  const testimonialsSliderProj = new Swiper(testimonialsSlider, {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev"
    },
  });
}


const workImages = document.querySelector('.work-images-slider');


if (workImages) {
  Swiper.use([Navigation, Thumbs]);
  const workSlider = new Swiper(".work-images-nav", {
    spaceBetween: 20,
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const workSliderNav = new Swiper(workImages, {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      nextEl: ".work-images__next",
      prevEl: ".work-images__prev",
    },
    thumbs: {
      swiper: workSlider,
    },
  });
}

