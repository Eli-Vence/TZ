const form = document.querySelector('.order_form');
const links = document.querySelectorAll('li');
const bottom = document.querySelector('.bottom-link');
links.forEach((el) =>
  el.addEventListener('click', () => {
    form.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    });
  })
);

bottom.addEventListener('click', () => {
  form.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
  });
});
