const swiperItems = {
  bagLink: [
    './img/teas/teabag1.png',
    './img/teas/teabag2.png',
    './img/teas/teabag3.png',
    './img/teas/teabag4.png',
    './img/teas/teabag5.png',
    './img/teas/teabag6.png',
    './img/teas/teabag7.png',
    './img/teas/teabag8.png',
    './img/teas/teabag9.png',
  ],
  herbsLink: [
    './img/teas/herbs1.png',
    './img/teas/herbs2.png',
    './img/teas/herbs3.png',
    './img/teas/herbs4.png',
    './img/teas/herbs5.png',
    './img/teas/herbs6.png',
    './img/teas/herbs7.png',
    './img/teas/herbs8.png',
    './img/teas/herbs9.png',
  ],
  names: [
    'Hibiscus Flower',
    'Chamomile Tea',
    'Rosemary Specials',
    'Raspberry Leaves',
    'Earl Grey',
    'Lavender Blend',
    'Almond Spice',
    'Rose Flowers',
    'Mint & Melissa Mix',
  ],
  prices: [7, 8, 8, 5, 6, 7, 15, 13, 15],
  hrefs: [
    './subpages/teaPage1/index.html',
    './subpages/teaPage2/index.html',
    './subpages/teaPage3/index.html',
    './subpages/teaPage4/index.html',
    './subpages/teaPage5/index.html',
    './subpages/teaPage6/index.html',
    './subpages/teaPage7/index.html',
    './subpages/teaPage8/index.html',
    './subpages/teaPage9/index.html',
  ],
};

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

const swiper = new Swiper(swiperItems);
const cartScript = new Cart();
