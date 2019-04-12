const hamburger = document.querySelector('.page-nav__btn');
const nav = document.querySelector('.page-nav');

hamburger.addEventListener('click', () => {
      nav.classList.toggle('opened');
      if (!nav.classList.contains('opened')) {
        nav.style.animation = 'close 1s 1 both ease';
        if (document.querySelector('.page-nav').getAttribute('class', '.page-nav')) {
          document.querySelector('.page-nav').style.animation = 'close 1s 1 both ease';
        }
      })