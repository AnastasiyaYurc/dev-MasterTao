const btnBurger = document.querySelector('.hamburger')
btnBurger.addEventListener('click', ()=> btnBurger.classList.toggle('is-active'))

const swiperBanner = new Swiper('.swiper-banner', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 24,
  // If we need pagination

    navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
    },

  pagination: {
      clickable: true,
    el: '.swiper-pagination',
  },


});