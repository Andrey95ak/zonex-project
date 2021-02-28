import Swiper, { Navigation, Pagination } from 'swiper';
import vars from '../_vars';

Swiper.use([Navigation, Pagination])
const bannerSlider = new Swiper(vars.$bannerSlider, {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
})