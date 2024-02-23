const elSearchInput = document.querySelector('.search-input');
const elMenuBtn = document.querySelector('.btn-menu');
const elMenu = document.querySelector('.navbar');
const elModal = document.querySelector('.layer');
const elCancelModal = document.querySelector('.hide-modal-btn');
const elMenuMask = document.querySelector('.menu-mask');


elMenuBtn.addEventListener('click', () => {
  elMenuBtn.classList.toggle('menu-btn--active');
  document.querySelector('body').classList.toggle('open-menu');
  elMenuMask.classList.toggle('menu-mask--active');
});

elMenuMask.addEventListener('click', evt => {
  if (!evt.target.matches('.navbar')) {
    elMenuBtn.classList.toggle('menu-btn--active');
    document.querySelector('body').classList.toggle('open-menu');
    elMenuMask.classList.toggle('menu-mask--active');
  }
});

elCancelModal.addEventListener('click', () => {
  elModal.classList.toggle('modal--hide');
});