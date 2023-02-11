$(document).ready(function () {
  /* Плавная прокрутка меню */
  $('.header a[href^="#"]').click(function () {
    let target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
    $('.header a[href^="#"]').parent().removeClass("active");
    $(this).parent().addClass("active");
    $(".menu__mobile .menu").toggle(1000);
    $(".menu__burger").toggleClass("close");
    return false;
  });
  /* Мобильное меню */
  $(".menu__burger").click(function () {
    $(".menu__mobile .menu").toggle(1000);
    $(this).toggleClass("close");
  });
});

// Слайдер

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 769px
    769: {
      slidesPerView: 3,
    }
  }
});
