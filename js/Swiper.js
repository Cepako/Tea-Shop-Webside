class Swiper {
  constructor(items) {
    this.items = {
      bagLink: items.bagLink,
      herbsLink: items.herbsLink,
      names: items.names,
      prices: items.prices,
      hrefs: items.hrefs,
    };
    this.indexes = [];
    document
      .querySelector('.leftArrow')
      .addEventListener('click', this.swipeLeft.bind(this));
    document
      .querySelector('.rightArrow')
      .addEventListener('click', this.swipeRight.bind(this));
    this.imgsB = [...document.querySelectorAll('.teabag')];
    this.imgsH = [...document.querySelectorAll('.herbs')];
    this.titles = [...document.querySelectorAll('.teas div h2')];
    this.bagPrices = [...document.querySelectorAll('.teas div p')];
    this.aHrefs = [...document.querySelectorAll('.teas div a')];
    for (let i = 0; i < this.imgsB.length; i++) this.indexes[i] = i;

    // popUp
    this.views = [...document.querySelectorAll('.view')];
    this.popUp = document.querySelector('.popUp');

    this.popUpFoto = document.querySelector('.popUp div .img');
    this.title = document.querySelector('.popUp .description h2');
    this.price = document.querySelector('.popUp .description p');
    this.viewMoreDetails = document.querySelector('.popUp .details a');

    this.views.forEach((view, i) => {
      view.addEventListener('click', this.addPopUp.bind(this, i));
    });
    document
      .querySelector('.fa-xmark')
      .addEventListener('click', this.removePopUp.bind(this));
  }
  addPopUp(i) {
    this.popUpFoto.src = this.items.bagLink[this.indexes[i]];
    this.title.textContent = this.items.names[this.indexes[i]];
    this.price.textContent = `$${this.items.prices[this.indexes[i]].toFixed(
      2
    )}`;
    this.viewMoreDetails.href = this.items.hrefs[this.indexes[i]];
    this.popUp.classList.add('active');
  }
  removePopUp() {
    this.popUp.classList.remove('active');
  }
  // popUpj

  swipeLeft() {
    for (let i = 0; i < this.imgsB.length; i++) {
      this.indexes[i]--;
      if (this.indexes[i] === -1)
        this.indexes[i] = this.items.bagLink.length - 1;
    }
    this.changeDiv();
  }
  swipeRight() {
    for (let i = 0; i < this.imgsB.length; i++) {
      this.indexes[i]++;
      if (this.indexes[i] === this.items.bagLink.length) this.indexes[i] = 0;
    }
    this.changeDiv();
  }
  changeDiv() {
    this.imgsB.forEach((img, index) => {
      img.src = this.items.bagLink[this.indexes[index]];
    });
    this.imgsH.forEach((img, index) => {
      img.src = this.items.herbsLink[this.indexes[index]];
    });
    this.titles.forEach((title, index) => {
      title.textContent = this.items.names[this.indexes[index]];
    });
    this.bagPrices.forEach((price, index) => {
      price.textContent = `$${this.items.prices[this.indexes[index]].toFixed(
        2
      )}`;
    });
    this.aHrefs.forEach((href, index) => {
      href.href = this.items.hrefs[this.indexes[index]];
    });
  }
}
