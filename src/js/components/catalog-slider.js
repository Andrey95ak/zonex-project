import Swiper, { Navigation, Pagination } from 'swiper';
import vars from '../_vars';

Swiper.use([Navigation, Pagination])
const catalogSlider = new Swiper(vars.$catalogSlider, {
  loop: true,
  navigation: {
    nextEl: '.hero-next-btn',
    prevEl: '.hero-prev-btn'
  },
  pagination: {
    el: '.hero-pag',
    type: 'bullets',
    clickable: true
  }
})

const relatedSlider = new Swiper(vars.$cardRelatedSlider, {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 4
    }
  }
})