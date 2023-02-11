// Селект

const groupSelect = () => {
  const element = document.querySelector("#city");
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "✔",
  });
};

groupSelect();

// Слайдеры

const swiperHero = new Swiper(".hero__swiper", {
  slidesPerView: 1,
  loop: true,
  allowTouchMove: false,
  centeredSlides: true,
  pagination: {
    el: ".hero__pagination",
  },
  navigation: {
    nextEl: ".hero__button-next",
    prevEl: ".hero__button-prev",
  },
});

const swiperSale = new Swiper(".sale__swiper", {
  slidesPerView: 4,
  loop: false,
  allowTouchMove: false,
  spaceBetween: 20,
  navigation: {
    nextEl: ".sale__next",
    prevEl: ".sale__prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

const swiperSaleImg = new Swiper(".sale__swiper-img", {
  slidesPerView: 1,
  centeredSlides: true,
  allowTouchMove: false,
  loop: false,
  pagination: {
    el: ".img__pag",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
    }}
});

const swiperProd = new Swiper(".product__swiper", {
  slidesPerView: 1,
  loop: false,
  allowTouchMove: false,
  centeredSlides: true,
  navigation: {
    nextEl: ".product__next",
    prevEl: ".product__prev",
  },
});

const swiperProdImg = new Swiper(".product__swiper-img", {
  slidesPerView: 1,
  loop: false,
  allowTouchMove: false,
  centeredSlides: true,

  navigation: {
    nextEl: ".product__next-img",
    prevEl: ".product__prev-img",
  },
});

// Табы

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sale__btn-tab").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll(".sale__block").forEach(function (howStep) {
        howStep.classList.remove("sale__block-active");
      });
      document.querySelectorAll(".sale__btn-tab").forEach(function (saleBtn) {
        saleBtn.classList.remove("sale__btn-tab-active");
      });

      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("sale__block-active");
      document
        .querySelector(`[data-path="${path}"]`)
        .classList.add("sale__btn-tab-active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".color-btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (e) {
      const btn = e.currentTarget.dataset.btn;
      document
        .querySelectorAll(".product__swiper-img")
        .forEach(function (howStep) {
          howStep.classList.remove("swiper-active");
        });
      document.querySelectorAll(".color-btn").forEach(function (saleBtn) {
        saleBtn.classList.remove("color-btn-active");
      });

      document
        .querySelector(`[data-color="${btn}"]`)
        .classList.add("swiper-active");
      document
        .querySelector(`[data-btn="${btn}"]`)
        .classList.add("color-btn-active");
    });
  });

  document
    .querySelector(".product__prev")
    .addEventListener("click", function () {
      document
        .querySelector('[data-color="two"]')
        .classList.add("swiper-active");
      document
        .querySelector('[data-btn="two"]')
        .classList.add("color-btn-active");
      document
        .querySelector(".product__next")
        .addEventListener("click", function () {
          document
            .querySelector('[data-color="six"]')
            .classList.add("swiper-active");
          document
            .querySelector('[data-btn="six"]')
            .classList.add("color-btn-active");
        });
    });
});

// Счётчик

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let sec = Math.floor((t / 1000) % 60);
  let min = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    total: t,
    hours: hours,
    min: min,
    sec: sec,
  };
}

const timers = document.querySelectorAll(".content__counter");

function updateTimer(timer, time) {
  const hoursSpan = timer.querySelector("._hours");
  const minutesSpan = timer.querySelector("._min");
  const secondsSpan = timer.querySelector("._sec");

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  hoursSpan.innerHTML = hours.toString().padStart(2, "0");
  minutesSpan.innerHTML = minutes.toString().padStart(2, "0");
  secondsSpan.innerHTML = seconds.toString().padStart(2, "0");
}

timers.forEach(function (timer) {
  let time = 12 * 60 * 60; // Set the timer to count down from 1 hour

  setInterval(function () {
    time--;
    if (time < 0) {
      time = 60 * 60; // Reset the timer
    }
    updateTimer(timer, time);
  }, 1000);
});

// моб меню

document.querySelector('.burger').addEventListener('click', function() {
  document.querySelector('.header__low').classList.toggle('header__low-active')
  document.querySelector('.burger').classList.toggle('burger-active')
})

// like

let buttons = document.querySelectorAll('.sale__like');

for (let button of buttons) {
  button.addEventListener('click', function() {
    this.classList.toggle('sale__like-active');
  });
}

let buttons2 = document.querySelectorAll('.like');

for (let button of buttons2) {
  button.addEventListener('click', function() {
    this.classList.toggle('like-active');
  });
}