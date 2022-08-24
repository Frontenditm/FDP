// MENU-OPEN
$(function () {
   $('.menu-open').click(function () {
      $('.header__top__link').toggleClass('show-menu')
      $('.header__top__links__a').toggleClass('no-menu')
      $('.no-menu').remove('.show-menu')
   });
});
$(function () {
   $('.header__top__links__a').click(function () {
      $('.header__top__link').toggleClass('show-menu')
   });
});
//

// SWIPER
const swiper = new Swiper('.swiper', {

   loop: true,
   simulateTouch: false,

   pagination: {
      el: '.swiper-pagination',
   },



   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOninteraction: true
   },

   effect: 'flip',

   slideaShadows: true,
   limitRotation: true
});
//