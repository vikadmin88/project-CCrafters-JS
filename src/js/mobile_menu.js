const modal = document.querySelector('.backdrop');
const closeModal = document.querySelector('.btn-close');
const link = document.querySelector('.btn-link-section');

closeModal.addEventListener('click', () => {
  modal.classList.remove('is-open');
});
link.addEventListener('click', () => {
  modal.classList.remove('is-open');
});
