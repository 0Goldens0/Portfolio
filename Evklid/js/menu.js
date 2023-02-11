window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelector('#closed-menu').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })

})
