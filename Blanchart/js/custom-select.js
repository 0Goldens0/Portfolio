function customSelect() {
  const selectBtn = document.querySelectorAll('.item__btn');

  selectBtn.forEach((selectBtn) => {
    selectBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const select = selectBtn.nextElementSibling;
      if (select.classList.contains('open-select')) {
        select.classList.remove('open-select');
        selectBtn.classList.remove('is-open');
      } else {
        closeDropdowns();
        select.classList.add('open-select');
        selectBtn.classList.add('is-open');
        getLink(select);
      };
    });
  });

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('select-custom')) {
      return;
    } else {
      closeDropdowns();
    };
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeDropdowns();
    };
  });

};

function closeDropdowns() {
  const selectBtn = document.querySelectorAll('.item__btn');
  selectBtn.forEach((selectBtn) => {
    selectBtn.classList.remove('is-open');
    selectBtn.nextElementSibling.classList.remove('open-select');
  });
};

function getLink(select) {
  const selectLiks = select.querySelectorAll('.slect__item-link');
  selectLiks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      closeDropdowns();
    });
  });
};

customSelect();
