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
const imgsSecondColor = [...document.querySelectorAll('.teaProduct img.herbs')];
imgsSecondColor.forEach((img, i) => {
  imgsSecondColor[i] = img.src;
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
const colors = [
  ['black', 'purple'],
  ['brown', 'purple'],
  ['black', 'purple'],
  ['brown', 'gray'],
  ['gray', ''],
  ['black', 'lightgreen'],
];

const views = [...document.querySelectorAll('.view')];
const pageAddToCartButtons = [
  ...document.querySelectorAll('.teaProduct .openPopUp'),
];
const popUp = document.querySelector('.popUp');
const popUpFoto = document.querySelector('.popUp div .img');
const title = document.querySelector('.popUp .description h2');
const price = document.querySelector('.popUp .description p');
const viewMoreDetails = document.querySelector('.popUp .details a');
const firstColor = document.querySelector('.popUp .color div:nth-of-type(1)');
const secondColor = document.querySelector('.popUp .color div:nth-of-type(2)');
const divColor = document.querySelector('.popUp .color');

views.forEach((view, i) => {
  view.addEventListener('click', () => {
    popUpFoto.src = imgs[i];
    title.textContent = h2s[i];
    price.textContent = ps[i];
    viewMoreDetails.href = hrefs[i];
    if (i === 4) {
      divColor.style.display = 'none';
    } else {
      firstColor.classList = '';
      secondColor.classList = '';
      divColor.style.display = 'block';
      firstColor.classList.add(colors[i][0]);
      secondColor.classList.add(colors[i][1]);
    }
    popUp.classList.add('active');
    firstColor.addEventListener('click', () => {
      firstColor.classList.add('active');
      secondColor.classList.remove('active');
      popUpFoto.src = imgs[i];
    });
    secondColor.addEventListener('click', () => {
      secondColor.classList.add('active');
      firstColor.classList.remove('active');
      popUpFoto.src = imgsSecondColor[i];
    });
  });
});
pageAddToCartButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    popUpFoto.src = imgs[i];
    title.textContent = h2s[i];
    price.textContent = ps[i];
    viewMoreDetails.href = hrefs[i];
    if (i === 4) {
      divColor.style.display = 'none';
    } else {
      firstColor.classList = '';
      secondColor.classList = '';
      divColor.style.display = 'block';
      firstColor.classList.add(colors[i][0]);
      secondColor.classList.add(colors[i][1]);
    }
    popUp.classList.add('active');
    firstColor.addEventListener('click', () => {
      firstColor.classList.add('active');
      secondColor.classList.remove('active');
      popUpFoto.src = imgs[i];
    });
    secondColor.addEventListener('click', () => {
      secondColor.classList.add('active');
      firstColor.classList.remove('active');
      popUpFoto.src = imgsSecondColor[i];
    });
  });
});
document.querySelector('.fa-xmark').addEventListener('click', () => {
  popUp.classList.remove('active');
});

let filterFlag = true;
document
  .querySelector('.main .filters .colors div:nth-child(1)')
  .addEventListener('click', () => {
    document.querySelector('.filters .colors').classList.toggle('active');
    if (filterFlag) {
      document.querySelector('.main .filters .colors div span').textContent =
        '-';
      filterFlag = !filterFlag;
    } else {
      document.querySelector('.main .filters .colors div span').textContent =
        '+';
      filterFlag = !filterFlag;
    }
  });

const teaProducts = [...document.querySelectorAll('.teaProducts .teaProduct')];
const flexStyle = document.querySelector('.teaProducts');
const allFilterButtons = [...document.querySelectorAll('.colorsWrapper div')];

const clearFilters = document.querySelector('.filters .clearFilters');

let minV = 2,
  maxV = 20;
const prices = [20, 17, 19, 5, 2, 15];
let blackFlag = false,
  grayFlag = false,
  brownFlag = false,
  lightgreenFlag = false,
  purpleFlag = false,
  emptyCounter;
const empty = document.querySelector('.isEmpty');

allFilterButtons.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    emptyCounter = 0;
    allFilterButtons.forEach((filterButton) => {
      filterButton.style.boxShadow = 'none';
    });
    filterButton.style.boxShadow = '0 0 2px 2px #555';
    if (filterButton.classList.value === 'black') {
      blackFlag = true;
      grayFlag = false;
      brownFlag = false;
      lightgreenFlag = false;
      purpleFlag = false;
      teaProducts.forEach((product, i) => {
        product.style.display = 'none';
        if (
          (product.dataset.firstcolor === 'black' ||
            product.dataset.secondcolor === 'black') &&
          prices[i] >= minV &&
          prices[i] <= maxV
        ) {
          emptyCounter++;
          product.style.display = 'block';
          clearFilters.style.display = 'block';
        }
      });
    } else if (filterButton.classList.value === 'gray') {
      blackFlag = false;
      grayFlag = true;
      brownFlag = false;
      lightgreenFlag = false;
      purpleFlag = false;
      teaProducts.forEach((product, i) => {
        product.style.display = 'none';
        if (
          (product.dataset.firstcolor === 'gray' ||
            product.dataset.secondcolor === 'gray') &&
          prices[i] >= minV &&
          prices[i] <= maxV
        ) {
          emptyCounter++;

          product.style.display = 'block';
          clearFilters.style.display = 'block';
        }
      });
    } else if (filterButton.classList.value === 'brown') {
      blackFlag = false;
      grayFlag = false;
      brownFlag = true;
      lightgreenFlag = false;
      purpleFlag = false;
      teaProducts.forEach((product, i) => {
        product.style.display = 'none';
        if (
          (product.dataset.firstcolor === 'brown' ||
            product.dataset.secondcolor === 'brown') &&
          prices[i] >= minV &&
          prices[i] <= maxV
        ) {
          emptyCounter++;
          product.style.display = 'block';
          clearFilters.style.display = 'block';
        }
      });
    } else if (filterButton.classList.value === 'lightgreen') {
      blackFlag = false;
      grayFlag = false;
      brownFlag = false;
      lightgreenFlag = true;
      purpleFlag = false;
      teaProducts.forEach((product, i) => {
        product.style.display = 'none';

        if (
          (product.dataset.firstcolor === 'lightgreen' ||
            product.dataset.secondcolor === 'lightgreen') &&
          prices[i] >= minV &&
          prices[i] <= maxV
        ) {
          console.log('tu');
          emptyCounter++;
          product.style.display = 'block';
          clearFilters.style.display = 'block';
        }
      });
    } else if (filterButton.classList.value === 'purple') {
      blackFlag = false;
      grayFlag = false;
      brownFlag = false;
      lightgreenFlag = false;
      purpleFlag = true;
      teaProducts.forEach((product, i) => {
        product.style.display = 'none';

        if (
          (product.dataset.firstcolor === 'purple' ||
            product.dataset.secondcolor === 'purple') &&
          prices[i] >= minV &&
          prices[i] <= maxV
        ) {
          emptyCounter++;
          product.style.display = 'block';
          clearFilters.style.display = 'block';
        }
      });
    }
    if (emptyCounter === 0) empty.style.display = 'block';
    else empty.style.display = 'none';
  });
});

// priceSlider

const rangeInput = document.querySelectorAll('.range-input input'),
  progress = document.querySelector('.slider .progress'),
  priceInput = document.querySelectorAll('.priceValue span');

const min = 2;
const max = 20;
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
    if (emptyCounter === 0) empty.style.display = 'block';
    else empty.style.display = 'none';

    emptyCounter = 0;
    prices.forEach((price, i) => {
      if (
        blackFlag === false &&
        grayFlag === false &&
        brownFlag === false &&
        lightgreenFlag === false &&
        purpleFlag === false
      ) {
        if (price >= minVal && price <= maxVal) {
          emptyCounter++;
          teaProducts[i].style.display = 'block';
        } else {
          teaProducts[i].style.display = 'none';
        }
      } else if (
        blackFlag === true &&
        (teaProducts[i].dataset.firstcolor === 'black' ||
          teaProducts[i].dataset.secondcolor === 'black')
      ) {
        if (price >= minVal && price <= maxVal) {
          emptyCounter++;
          teaProducts[i].style.display = 'block';
        } else {
          teaProducts[i].style.display = 'none';
        }
      } else if (
        grayFlag === true &&
        (teaProducts[i].dataset.firstcolor === 'gray' ||
          teaProducts[i].dataset.secondcolor === 'gray')
      ) {
        if (price >= minVal && price <= maxVal) {
          emptyCounter++;
          teaProducts[i].style.display = 'block';
        } else {
          teaProducts[i].style.display = 'none';
        }
      } else if (
        brownFlag === true &&
        (teaProducts[i].dataset.firstcolor === 'brown' ||
          teaProducts[i].dataset.secondcolor === 'brown')
      ) {
        if (price >= minVal && price <= maxVal) {
          emptyCounter++;
          teaProducts[i].style.display = 'block';
        } else {
          teaProducts[i].style.display = 'none';
        }
      } else if (
        lightgreenFlag === true &&
        (teaProducts[i].dataset.firstcolor === 'lightgreen' ||
          teaProducts[i].dataset.secondcolor === 'lightgreen')
      ) {
        if (price >= minVal && price <= maxVal) {
          emptyCounter++;
          teaProducts[i].style.display = 'block';
        } else {
          teaProducts[i].style.display = 'none';
        }
      } else if (
        purpleFlag === true &&
        (teaProducts[i].dataset.firstcolor === 'purple' ||
          teaProducts[i].dataset.secondcolor === 'purple')
      ) {
        if (price >= minVal && price <= maxVal) {
          emptyCounter++;
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
      blackFlag === false &&
      grayFlag === false &&
      brownFlag === false &&
      lightgreenFlag === false &&
      purpleFlag === false
    ) {
      clearFilters.style.display = 'none';
    }
    if (emptyCounter === 0) empty.style.display = 'block';
    else empty.style.display = 'none';
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
  allFilterButtons.forEach((filterButton) => {
    filterButton.style.boxShadow = 'none';
  });
  empty.style.display = 'none';
  clearFilters.style.display = 'none';
});

const cartScript = new Cart();
