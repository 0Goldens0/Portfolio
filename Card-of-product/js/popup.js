window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#popup-btn').addEventListener('click', function() {
      document.querySelector('#popup').classList.toggle('is-active')
    })
  
    document.querySelector('#popup-closed').addEventListener('click', function() {
      document.querySelector('#popup').classList.toggle('is-active')
    })
  
  })