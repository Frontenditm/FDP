$(function () {
   $('.menu-open').click(function () {
      $('.header__top__link').toggleClass('show-menu')
      $('body').toggleClass('lock');
   })
})

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

