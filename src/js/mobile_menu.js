const modal = document.querySelector('.backdrop');
const closeModal = document.querySelector('.btn-close-mob');
const homeButton = document.querySelector('.first-link-home');
const favoritesButton = document.querySelector('.link-favorites');

const pathname = window.location.pathname;

if (pathname.endsWith('/') || pathname.endsWith('/index.html')) {
  homeButton.classList.add('active');
} else if (pathname.endsWith('/favorites.html')) {
  favoritesButton.classList.add('active');
}

closeModal.addEventListener('click', () => {
  modal.classList.remove('is-open');
});
