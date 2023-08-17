// goUpButton
function goUp() {
  $('body, html').animate(
    {
      scrollTop: 0,
    },
    2000
  );
}
$('.up').on('click', goUp);

// cart
const bgBlur = document.querySelector('.bgBlur');
const cart = document.querySelector('.cart');

document.querySelector('.fa-bag-shopping').addEventListener('click', () => {
  bgBlur.classList.add('on');
  cart.classList.add('on');
});
document.querySelector('.cartNumber').addEventListener('click', () => {
  bgBlur.classList.add('on');
  cart.classList.add('on');
});

document.querySelector('.fa-chevron-up').addEventListener('click', () => {
  bgBlur.classList.remove('on');
  cart.classList.remove('on');
});
bgBlur.addEventListener('click', () => {
  bgBlur.classList.remove('on');
  cart.classList.remove('on');
});

const inputSearch = document.querySelector('.search input');

inputSearch.addEventListener('click', () => {
  inputSearch.style.width = '14vw';
  document.querySelector('.search').style.backgroundColor = '#333';
  document.querySelector('.searchBlock').style.display = 'block';
});
document.addEventListener('click', (e) => {
  const target = e.target;
  const searchContainer = document.querySelector('.search');

  if (target !== inputSearch && !searchContainer.contains(target)) {
    inputSearch.style.width = '11.5vw';
    searchContainer.style.backgroundColor = 'transparent';
    document.querySelector('.searchBlock').style.display = 'none';
  }
});
let h2Names = [...document.querySelectorAll('.option h2')];
const options = [...document.querySelectorAll('.option')];
function searchTea(e) {
  h2Names = [...document.querySelectorAll('.option h2')];
  let value = e.target.value.toLowerCase();
  h2Names = h2Names.filter((h2) =>
    h2.textContent.toLowerCase().includes(value)
  );
  options.forEach((option) => {
    option.style.display = 'none';
  });
  h2Names.forEach((h2) => {
    h2.parentElement.style.display = 'flex';
  });
  if (value === '') {
    options.forEach((option) => {
      option.style.display = 'flex';
    });
  }
}
inputSearch.addEventListener('input', searchTea);
