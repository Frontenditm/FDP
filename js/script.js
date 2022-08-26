// BURGER__MENU
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__top__nav').toggleClass('active');
      $('body').toggleClass('lock');
   })
})
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