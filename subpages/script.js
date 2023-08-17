const swiperItems = {
  bagLink: [
    '../../img/teas/teabag1.png',
    '../../img/teas/teabag2.png',
    '../../img/teas/teabag3.png',
    '../../img/teas/teabag4.png',
    '../../img/teas/teabag5.png',
    '../../img/teas/teabag6.png',
    '../../img/teas/teabag7.png',
    '../../img/teas/teabag8.png',
    '../../img/teas/teabag9.png',
    '../../img/extras/cup1.png',
    '../../img/extras/setOfCups.png',
    '../../img/extras/teaBallInfuser.png',
    '../../img/extras/teaPot1.png',
    '../../img/extras/teaPot2.png',
    '../../img/extras/teaPot3.png',
  ],
  herbsLink: [
    '../../img/teas/herbs1.png',
    '../../img/teas/herbs2.png',
    '../../img/teas/herbs3.png',
    '../../img/teas/herbs4.png',
    '../../img/teas/herbs5.png',
    '../../img/teas/herbs6.png',
    '../../img/teas/herbs7.png',
    '../../img/teas/herbs8.png',
    '../../img/teas/herbs9.png',
    '../../img/extras/cup1.1.png',
    '../../img/extras/setOfCups1.png',
    '../../img/extras/teaBallInfuser.png',
    '../../img/extras/teaPot1.1.png',
    '../../img/extras/teaPot2.2.png',
    '../../img/extras/teaPot3.3.png',
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
    'Cup',
    'Set Of Cups',
    'Tea Ball Infuser',
    'Classic Tea Pot',
    'Small Tea Pot',
    'Vintage Tea Pot',
  ],
  prices: [7, 8, 8, 5, 6, 7, 15, 13, 15, 5, 15, 2, 20, 17, 19],
  hrefs: [
    '../teaPage1/index.html',
    '../teaPage2/index.html',
    '../teaPage3/index.html',
    '../teaPage4/index.html',
    '../teaPage5/index.html',
    '../teaPage6/index.html',
    '../teaPage7/index.html',
    '../teaPage8/index.html',
    '../teaPage9/index.html',
    '../cupPage/index.html',
    '../setOfCupsPage/index.html',
    '../teaBallInfuserPage/index.html',
    '../classicTeaPotPage/index.html',
    '../smallTeaPotPage/index.html',
    '../vintageTeaPotPage/index.html',
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

// buyNow Button
const buy = document.querySelector('.buy');
document.querySelector('.buyNow').addEventListener('click', () => {
  buy.classList.add('active');
});
document.querySelector('.closeBuyNow').addEventListener('click', () => {
  buy.classList.remove('active');
});
document.querySelector('.gotIt').addEventListener('click', () => {
  buy.classList.remove('active');
});

const swiper = new Swiper(swiperItems);
const cartScript = new Cart();
