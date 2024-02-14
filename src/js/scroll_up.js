const scrollUpButton = document.querySelector('.scroll-up-button');

scrollUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY < 230) {
    scrollUpButton.classList.add('scroll-up-button-active');
  } else {
    scrollUpButton.classList.remove('scroll-up-button-active');
  }
});
