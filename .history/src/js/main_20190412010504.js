const hamburger = document.querySelector('.page-nav__btn');

hamburger.addEventListener('click', () => {
  document.querySelector('.page-nav').classList.toggle('opened');
  if (document.querySelector('.page-nav').getAttribute('class', '.page-nav')) {
    document.querySelector('.page-nav').style.animation = 'close 1s 1 both ease';
  }
})