const scrollUpButton = document.querySelector('.scroll-up-button');

scrollUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY < 230) {
    scrollUpButton.classList.add('active');
  } else {
    scrollUpButton.classList.remove('active');
  }
});
