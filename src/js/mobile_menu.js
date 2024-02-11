const openModal = document.querySelector('.backdrop');
const closeModal = document.querySelector('.btn-close');

closeModal.addEventListener('click', () => {
  openModal.classList.remove('is-open');
});
