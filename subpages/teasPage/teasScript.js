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

// popUp
const imgs = [...document.querySelectorAll('.teaProduct img.teabag')];
imgs.forEach((img, i) => {
  imgs[i] = img.src;
});
const h2s = [...document.querySelectorAll('.teaProduct h2')];
h2s.forEach((h2, i) => {
  h2s[i] = h2.textContent;
});
const ps = [...document.querySelectorAll('.teaProduct p')];
ps.forEach((p, i) => {
  ps[i] = p.textContent;
});
const hrefs = [...document.querySelectorAll('.teaProduct a')];
hrefs.forEach((a, i) => {
  a[i] = a.href.value;
});

const views = [...document.querySelectorAll('.view')];
const pageAddToCartButtons = [
  ...document.querySelectorAll('.teaProduct .openPopUp'),
];
const popUp = document.querySelector('.popUp');
const popUpFoto = document.querySelector('.popUp div .img');
const title = document.querySelector('.popUp .description h2');
const price = document.querySelector('.popUp .description p');
const viewMoreDetails = document.querySelector('.popUp .details a');

views.forEach((view, i) => {
  view.addEventListener('click', () => {
    popUpFoto.src = imgs[i];
    title.textContent = h2s[i];
    price.textContent = ps[i];
    viewMoreDetails.href = hrefs[i];
    popUp.classList.add('active');
  });
});
pageAddToCartButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    popUpFoto.src = imgs[i];
    title.textContent = h2s[i];
    price.textContent = ps[i];
    viewMoreDetails.href = hrefs[i];
    popUp.classList.add('active');
  });
});
document.querySelector('.fa-xmark').addEventListener('click', () => {
  popUp.classList.remove('active');
});

// filterby
let filterFlag = true;
document
  .querySelector('.main .filters .collection div')
  .addEventListener('click', () => {
    document.querySelector('.filters .collection').classList.toggle('active');
    if (filterFlag) {
      document.querySelector(
        '.main .filters .collection div span'
      ).textContent = '-';
      filterFlag = !filterFlag;
    } else {
      document.querySelector(
        '.main .filters .collection div span'
      ).textContent = '+';
      filterFlag = !filterFlag;
    }
  });

const teaProducts = [...document.querySelectorAll('.teaProducts .teaProduct')];
const flexStyle = document.querySelector('.teaProducts');
const allFilterButtons = [...document.querySelectorAll('.collection div~h2')];

const clearFilters = document.querySelector('.filters .clearFilters');

let minV = 5,
  maxV = 15;
const prices = [7, 8, 8, 5, 6, 7, 15, 13, 15];
let classicFlag = false,
  herbalFlag = false,
  specialFlag = false,
  isEmptyFlag = false,
  emptyCounter = teaProducts.length;
const empty = document.querySelector('.isEmpty');

allFilterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    emptyCounter = 0;
    if (filterButton.classList.value === 'all') {
      flexStyle.style.flexWrap = 'wrap';
      teaProducts.forEach((product, i) => {
        if (prices[i] >= minV && prices[i] <= maxV) {
          ++emptyCounter;
          product.style.display = 'block';
          classicFlag = false;
          herbalFlag = false;
          specialFlag = false;
        }
        if (minV === 5 && maxV === 15) clearFilters.style.display = 'none';
      });
    } else if (filterButton.classList.value === 'classic') {
      flexStyle.style.flexWrap = 'nowrap';
      teaProducts.forEach((product, i) => {
        product.style.display = 'none';
        if (
          product.dataset.type === 'classic' &&
          prices[i] >= minV &&
          prices[i] <= maxV
        ) {
          ++emptyCounter;
          product.style.display = 'block';
          classicFlag = true;
          herbalFlag = false;
          specialFlag = false;
          clearFilters.style.display = 'block';
        }
      });
    } else if (filterButton.classList.value === 'herbalTea') {
      flexStyle.style.flexWrap = 'wrap';
      teaProducts.forEach((product, i) => {
        product.style.display = 'none';
        if (
          product.dataset.type === 'herbal' &&
          prices[i] >= minV &&
          prices[i] <= maxV
        ) {
          ++emptyCounter;
          product.style.display = 'block';
          herbalFlag = true;
          classicFlag = false;
          specialFlag = false;
          clearFilters.style.display = 'block';
        }
      });
    } else {
      flexStyle.style.flexWrap = 'nowrap';
      teaProducts.forEach((product, i) => {
        product.style.display = 'none';
        if (
          product.dataset.type === 'special' &&
          prices[i] >= minV &&
          prices[i] <= maxV
        ) {
          ++emptyCounter;
          product.style.display = 'block';
          specialFlag = true;
          classicFlag = false;
          herbalFlag = false;
          clearFilters.style.display = 'block';
        }
      });
    }

    if (emptyCounter === 0) isEmptyFlag = true;

    if (isEmptyFlag) {
      empty.style.display = 'block';
      isEmptyFlag = !isEmptyFlag;
    } else {
      empty.style.display = 'none';
    }
  });
});

// priceSlider

const rangeInput = document.querySelectorAll('.range-input input'),
  progress = document.querySelector('.slider .progress'),
  priceInput = document.querySelectorAll('.priceValue span');

const min = 5;
const max = 15;
let priceGap = 1;
rangeInput.forEach((input) => {
  input.addEventListener('input', (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    minV = minVal;
    maxV = maxVal;
    if (maxVal - minVal < priceGap) {
      if (e.target.className === 'range-min') {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].textContent = `$${minVal}.00`;
      priceInput[1].textContent = `$${maxVal}.00`;
      progress.style.left = ((minVal - min) / (max - min)) * 100 + '%';
      progress.style.right = ((maxVal - max) / (min - max)) * 100 + '%';
    }
    emptyCounter = 0;
    prices.forEach((price, i) => {
      if (
        classicFlag === false &&
        herbalFlag === false &&
        specialFlag === false
      ) {
        if (price >= minVal && price <= maxVal) {
          ++emptyCounter;
          teaProducts[i].style.display = 'block';
        } else {
          teaProducts[i].style.display = 'none';
        }
      } else if (
        classicFlag === true &&
        teaProducts[i].dataset.type === 'classic'
      ) {
        if (price >= minVal && price <= maxVal) {
          ++emptyCounter;
          teaProducts[i].style.display = 'block';
        } else {
          teaProducts[i].style.display = 'none';
        }
      } else if (
        herbalFlag === true &&
        teaProducts[i].dataset.type === 'herbal'
      ) {
        if (price >= minVal && price <= maxVal) {
          ++emptyCounter;
          teaProducts[i].style.display = 'block';
        } else {
          teaProducts[i].style.display = 'none';
        }
      } else if (
        specialFlag === true &&
        teaProducts[i].dataset.type === 'special'
      ) {
        if (price >= minVal && price <= maxVal) {
          ++emptyCounter;
          teaProducts[i].style.display = 'block';
        } else {
          teaProducts[i].style.display = 'none';
        }
      }
    });
    if (minVal !== min || maxVal !== max) {
      clearFilters.style.display = 'block';
    } else if (
      minVal === min &&
      maxVal === max &&
      classicFlag === false &&
      herbalFlag === false &&
      specialFlag === false
    ) {
      clearFilters.style.display = 'none';
    }

    if (emptyCounter === 0) isEmptyFlag = true;

    if (isEmptyFlag) {
      empty.style.display = 'block';
      isEmptyFlag = !isEmptyFlag;
    } else {
      empty.style.display = 'none';
    }
  });
});

let priceFilterFlag = true;

document
  .querySelector('.main .filters .priceFilter div')
  .addEventListener('click', () => {
    document.querySelector('.filters .priceFilter').classList.toggle('active');
    if (priceFilterFlag) {
      document.querySelector(
        '.main .filters .priceFilter div span'
      ).textContent = '-';
      priceFilterFlag = !priceFilterFlag;
    } else {
      document.querySelector(
        '.main .filters .priceFilter div span'
      ).textContent = '+';
      priceFilterFlag = !priceFilterFlag;
    }
  });

// clearFilters

clearFilters.addEventListener('click', () => {
  flexStyle.style.flexWrap = 'wrap';
  minV = min;
  maxV = max;
  priceInput[0].textContent = `$${minV}.00`;
  priceInput[1].textContent = `$${maxV}.00`;
  rangeInput[0].value = min;
  rangeInput[1].value = max;
  progress.style.left = ((minV - min) / (max - min)) * 100 + '%';
  progress.style.right = ((maxV - max) / (min - max)) * 100 + '%';
  teaProducts.forEach((product) => {
    product.style.display = 'block';
  });
  emptyCounter = teaProducts.length;
  empty.style.display = 'none';
  clearFilters.style.display = 'none';
});
const cartScript = new Cart();
