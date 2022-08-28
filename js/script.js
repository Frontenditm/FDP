// BURGER__MENU
$(document).ready(function () {

   $('.header__burger').click(function (event) {
      $('.header__burger, .header__top__nav').toggleClass('active');
      $('body').toggleClass('lock');
   })
   $('.header__top__links__a').click(function (event) {
      $('.header__burger, .header__top__nav').toggleClass('active');
      $('.header__burger').remove('.active');
      $('body').toggleClass('lock');
   })

})
//

// BUTTON UP
function footer__to__top() {
   let button = $('.footer__to__top');

   $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 80) {
         button.fadeIn();
      } else {
         button.fadeOut();
      }
   });
   button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({ scrollTop: 0 }, 2000);
   });
}
footer__to__top();
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