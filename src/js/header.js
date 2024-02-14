function onload() {
  const lnk = document.querySelectorAll('.navigation-link');
  const pathName = window.location.pathname;
  for (let i = 0; i < lnk.length; i++) {
    const currentHref = lnk[i].pathname;
    if (
      (pathName.endsWith('/') && i === 0) ||
      (pathName !== '/' && currentHref === pathName)
    ) {
      lnk[i].classList.add('current-page-link');
    }
  }
}
onload();

document.querySelector('.open-btn-mobile').addEventListener('click', () => {
  document.querySelector('.backdrop').classList.add('is-open');
});
