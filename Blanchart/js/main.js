// Валидация
let selector = document.querySelector("#phone")
let im = new Inputmask("+7(999)-999-99-99")
im.mask(selector)

let validation = new JustValidate('#form',{
  errorFieldCssClass: 'is-invalid'
})

validation.addField('#name', [
  {
    rule: 'required',
    errorMessage : 'Вы не ввели имя'
  },

  {
    rule: 'minLength',
    value: 2,
    errorMessage : 'Необходимо ввести не менее 2 симв.'
  }

])

.addField("#phone", [
  {
    rule: 'required',
    errorMessage : 'Вы не ввели телефон'
  },

  {
    rule: 'minLength',
    value: 4,
    errorMessage : 'Необходимо ввести 10 символов'
  }
])

// Слайдер с фонами

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  }
  });




const body = document.body

// Модальные окна

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.gallery__link').forEach(function(modal) {
        modal.addEventListener('click', function(e) {
        const link = e.currentTarget.dataset.link
  
         document.querySelectorAll('modal__conainer').forEach(function(mod) {
           mod.classList.remove('modal__active')
         })
         document.querySelector(`[data-modal="${link}"]`).classList.add('modal__active')
         body.classList.toggle('lock')
        })
    })

    document.querySelectorAll('.modal__close').forEach(function(close) {
        close.addEventListener('click', function() {
            document.querySelectorAll('.modal__conainer').forEach(function(mod) {
                mod.classList.remove('modal__active')
              }) 
              body.classList.remove('lock')
                  
        })    
    })    
  });

  document.querySelectorAll('.modal__conainer').forEach(function(b) {
    b.addEventListener('click', function() {
        document.querySelectorAll('.modal__conainer').forEach(function(mod) {
            mod.classList.remove('modal__active')
          }) 
          body.classList.remove('lock')
    })
  })

// Бургер и поиск

const menu = document.querySelector ('.nav__link-block')
const enter = document.querySelector ('.enter__block')
const menuBtn = document.querySelector ('.nav__menu')
const search = document.querySelector ('.nav__search-mob')
const searchBtn = document.querySelector ('.search__btn-mob')
const searchClose = document.querySelector ('.close__search')

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active__menu')
        enter.classList.toggle('active__enter')
        menuBtn.classList.toggle('active__btn')
        body.classList.toggle('lock')
    })

    menu.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active__menu')
            enter.classList.remove('active__enter')
            menuBtn.classList.remove('active__btn')
            body.classList.remove('lock')
        })
    })
}

if (search && searchBtn) {
    searchBtn.addEventListener('click', () => {
        search.classList.toggle('search__active')
        searchBtn.classList.toggle('search__btn-active')
    })

    searchClose.addEventListener('click', () => {
        search.classList.remove('search__active')
        searchBtn.classList.remove('search__btn-active')
    })
}
  
// Плавный скрол

$('a[href^="#"').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, {
      duration: 800,
      easing: "linear"
  });
  return false;
});

// Табы

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path

       document.querySelectorAll('.catalog__content').forEach(function(howStep) {
         howStep.classList.remove('is-active')
       })
       document.querySelector(`[data-target="${path}"]`).classList.add('is-active')
    })
  })

  let btns = document.querySelectorAll('.catalog__btn');
  console.log(btns.length);
  for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    btns.forEach(function(el) {
      el.classList.remove('clicked-btn-color');
    });
    this.classList.add('clicked-btn-color');
  });
}
})

// Аккордеон

$(".accordion").accordion({
  collapsible: true,
  active: false,
  heightStyle: 'content',
});

// Слайдеры

// 1.

document.addEventListener('DOMContentLoaded', function() {
  new ChiefSlider('.slider', {
    loop: false,
    swipe: false 
  });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elms = document.querySelectorAll('.slider');
    for (var i = 0, len = elms.length; i < len; i++) {
      // инициализация elms[i] в качестве слайдера
      new ChiefSlider(elms[i]);
    }
  });

// 2.

document.addEventListener('DOMContentLoaded', function() {
  new ChiefSlider('.loop__slider', {
    loop: true,
    swipe: false 
  });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elms = document.querySelectorAll('.slider');
    for (var i = 0, len = elms.length; i < len; i++) {
      // инициализация elms[i] в качестве слайдера
      new ChiefSlider(elms[i]);
    }
  });


// Отправка формы на почту


$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
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