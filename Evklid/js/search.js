window.addEventListener('DOMContentLoaded', function() {

  document.querySelector('#search-btn').addEventListener('click', function() {
    document.querySelector('#search').classList.toggle('is-active')
  })

  document.querySelector('#search-btn').addEventListener('click', function() {
    document.querySelector('#search-btn').classList.toggle('active')
  })


  document.querySelector('#search-adaptive').addEventListener('click', function() {
    document.querySelector('#search').classList.toggle('is-active')
  })

  document.querySelector('#search-adaptive').addEventListener('click', function() {
    document.querySelector('#search-adaptive').classList.toggle('active')
  })


  document.querySelector('#search__btn-closed').addEventListener('click', function() {
    document.querySelector('#search').classList.toggle('is-active')
    document.querySelector('#search-btn').classList.toggle('active')
    document.querySelector('#search-adaptive').classList.toggle('active')


  })
})
