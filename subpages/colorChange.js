let choises = [...document.querySelectorAll('.choise img')];
let srcChosen = '';
const chosen = document.querySelector('.chosen');
const text = document.querySelector('.color p');
let tab = [];

choises.forEach((choise, i) => {
  choise.addEventListener('click', () => {
    switch (i) {
      case 0:
        srcChosen = choises[0].src;
        choises[0].classList.add('active');
        choises[1].classList.remove('active');
        break;
      case 1:
        srcChosen = choises[1].src;
        choises[1].classList.add('active');
        choises[0].classList.remove('active');
        break;
    }
    chosen.src = srcChosen;
  });
});

let grey = document.querySelector('.color div:nth-of-type(1)');
let brown = document.querySelector('.color div:nth-of-type(2)');

grey.addEventListener('click', () => {
  grey.classList.add('active');
  brown.classList.remove('active');
  choises[0].style.display = 'block';
  choises[1].style.display = 'none';
  srcChosen = choises[0].src;
  choises[0].classList.remove('active');
  tab = grey.classList.value.split(' ');
  text.textContent = `Color: ${tab[0]}`;
  chosen.src = srcChosen;
});
brown.addEventListener('click', () => {
  brown.classList.add('active');
  grey.classList.remove('active');
  choises[0].style.display = 'none';
  choises[1].style.display = 'block';
  choises[1].classList.remove('active');
  srcChosen = choises[1].src;
  tab = brown.classList.value.split(' ');
  text.textContent = `Color: ${tab[0]}`;
  chosen.src = srcChosen;
});
