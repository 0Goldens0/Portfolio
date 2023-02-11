
// Слайдеры

const swiperServ = new Swiper('.swiper-servise', {
  navigation: {
    nextEl: ".servise__next",
    prevEl: ".servise__prev",
  },
  loop: true,
});

const swiperGallery = new Swiper('.swiper__gallery', {
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    // when window width is >= 640px
    530: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});

// Плавный скролл

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// Модальное окно

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.hero__btn').addEventListener('click', function() {
    document.querySelector('.modal__body').classList.add('modal__active');
    document.querySelector('.modal__window').classList.add('window-is-active');
    document.body.classList.add('lock');
  })
  document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.modal__body').classList.remove('modal__active');
    document.querySelector('.modal__window').classList.remove('window-is-active');
    document.body.classList.remove('lock');
  })
})

// Появление блоков при скролле

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

// Мобильное меню

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.menu').classList.add('menu__active');
  })
  document.querySelector('.menu__close').addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('menu__active');
  })
})

// Отправка форм на почту

$(document).ready(function() {

  //E-mail Ajax Send
  $("modal__form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});

  // Отправка форм на почту2

$(document).ready(function() {

  //E-mail Ajax Send
  $("contact__form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});
