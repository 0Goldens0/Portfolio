const swiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

 // area-label
  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }
});
