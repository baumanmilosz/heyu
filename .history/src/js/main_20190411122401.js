const hamburger = document.querySelector('.page-nav__btn');

hamburger.addEventListener('click', () => {
  document.querySelector('.page-nav').classList.toggle('opened');
  console.log('a');
})