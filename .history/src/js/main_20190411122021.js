const hamburger = document.querySelector('.page-nav__link');

hamburger.addEventListener('click', () => {
  document.querySelector('.page-nav').classList.toggle('opened');
}
})