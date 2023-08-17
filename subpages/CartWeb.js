class Cart {
  constructor() {
    this.totalPrice = 0;
    document
      .querySelector('.addToCart')
      .addEventListener('click', this.addToCart.bind(this));
    document
      .querySelector('.addToCartWeb')
      .addEventListener('click', this.addToCartWeb.bind(this));
    this.h2Empty = document.createElement('h2');
    this.divs = [];
    this.deleteX = [];
    this.cartNumber = 0;
    this.cartChange();
    this.cartIsEmpty();
  }
  addToCart() {
    this.cartChange();
    let product = document.createElement('div');
    product.className = 'product';
    let x = document.createElement('i');
    x.className = 'fa-solid fa-x';
    x.addEventListener('click', () => this.deleteProduct(product));
    product.appendChild(x);

    let cartFoto = document.createElement('div');
    cartFoto.className = 'cartFoto';
    let imgCartFoto = document.createElement('img');
    imgCartFoto.src = document.querySelector('.popUp img').src;
    cartFoto.appendChild(imgCartFoto);
    product.appendChild(cartFoto);
    let cartDescription = document.createElement('div');
    cartDescription.className = 'cartDescription';
    let h2 = document.createElement('h2');
    h2.textContent = document.querySelector('.popUp h2').textContent;
    cartDescription.appendChild(h2);
    let p = document.createElement('p');
    p.textContent = document.querySelector('.popUp p').textContent;
    cartDescription.appendChild(p);

    let divDecrease = document.createElement('div');
    divDecrease.setAttribute('id', 'decrease');
    divDecrease.textContent = '-';
    divDecrease.className = 'value-button';
    cartDescription.appendChild(divDecrease);
    let input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    input.className = 'quantityCart';
    input.value = document.querySelector('.popUp input.quantity').value;
    cartDescription.appendChild(input);
    let divIncrease = document.createElement('div');
    divIncrease.setAttribute('id', 'increase');
    divIncrease.className = 'value-button';
    divIncrease.textContent = '+';
    cartDescription.appendChild(divIncrease);
    product.appendChild(cartDescription);
    divDecrease.addEventListener('click', () => {
      if (input.value > 1) {
        input.value--;
        this.cartNumber--;
        this.totalPrice -= 1 * parseInt(p.textContent[1] + p.textContent[2]);
        document.querySelector(
          '.subtotal h2'
        ).textContent = `$${this.totalPrice.toFixed(2)}`;
        document.querySelector('.cartNumber p').textContent = this.cartNumber;
      }
    });
    divIncrease.addEventListener('click', () => {
      input.value = isNaN(input.value) ? 0 : input.value;
      this.cartNumber++;
      input.value++;
      this.totalPrice += parseInt(p.textContent[1] + p.textContent[2]);
      document.querySelector(
        '.subtotal h2'
      ).textContent = `$${this.totalPrice.toFixed(2)}`;
      document.querySelector('.cartNumber p').textContent = this.cartNumber;
    });

    document.querySelector('.products').appendChild(product);

    this.cartNumber += input.value * 1;
    this.totalPrice +=
      input.value * 1 * parseInt(p.textContent[1] + p.textContent[2]);

    if (this.divs.length === 0) {
      this.h2Empty.textContent = '';

      let h1 = document.createElement('h1');
      h1.textContent = 'Subtotal';
      let subtotalDiv = document.querySelector('.subtotal');
      subtotalDiv.appendChild(h1);
      let h2Sub = document.createElement('h2');
      h2Sub.textContent = `$${this.totalPrice.toFixed(2)}`;
      subtotalDiv.appendChild(h2Sub);
      subtotalDiv.style.borderBottom = '1px solid black';
      let cartButton = document.createElement('button');
      cartButton.textContent = 'View Cart';
      document.querySelector('.cartButton').appendChild(cartButton);
    }
    document.querySelector(
      '.subtotal h2'
    ).textContent = `$${this.totalPrice.toFixed(2)}`;
    document.querySelector('.cartNumber p').textContent = this.cartNumber;
    document.querySelector('.popUp input.quantity').value = '1';
    document.querySelector('.popUp').classList.remove('active');
    document.querySelector('.bgBlur').classList.add('on');
    document.querySelector('.cart').classList.add('on');
    this.cartIsEmpty();
    this.cartChange();
  }
  addToCartWeb() {
    this.cartChange();
    let product = document.createElement('div');
    product.className = 'product';
    let x = document.createElement('i');
    x.className = 'fa-solid fa-x';
    x.addEventListener('click', () => this.deleteProduct(product));
    product.appendChild(x);

    let cartFoto = document.createElement('div');
    cartFoto.className = 'cartFoto';
    let imgCartFoto = document.createElement('img');
    imgCartFoto.src = document.querySelector(
      '.teabagProduct div img.chosen'
    ).src;
    cartFoto.appendChild(imgCartFoto);
    product.appendChild(cartFoto);
    let cartDescription = document.createElement('div');
    cartDescription.className = 'cartDescription';
    let h2 = document.createElement('h2');
    h2.textContent = document.querySelector('.teabagProduct h1').textContent;
    cartDescription.appendChild(h2);
    let p = document.createElement('p');
    p.textContent = document.querySelector('.teabagProduct h2').textContent;
    cartDescription.appendChild(p);

    let divDecrease = document.createElement('div');
    divDecrease.setAttribute('id', 'decrease');
    divDecrease.textContent = '-';
    divDecrease.className = 'value-button';
    cartDescription.appendChild(divDecrease);
    let input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    input.className = 'quantityCart';
    input.value = document.querySelector('.teabagProduct input.quantity').value;
    cartDescription.appendChild(input);
    let divIncrease = document.createElement('div');
    divIncrease.setAttribute('id', 'increase');
    divIncrease.className = 'value-button';
    divIncrease.textContent = '+';
    cartDescription.appendChild(divIncrease);
    product.appendChild(cartDescription);
    divDecrease.addEventListener('click', () => {
      if (input.value > 1) {
        input.value--;
        this.cartNumber--;
        this.totalPrice -= 1 * parseInt(p.textContent[1] + p.textContent[2]);
        document.querySelector(
          '.subtotal h2'
        ).textContent = `$${this.totalPrice.toFixed(2)}`;
        document.querySelector('.cartNumber p').textContent = this.cartNumber;
      }
    });
    divIncrease.addEventListener('click', () => {
      input.value = isNaN(input.value) ? 0 : input.value;
      this.cartNumber++;
      input.value++;
      this.totalPrice += parseInt(p.textContent[1] + p.textContent[2]);
      document.querySelector(
        '.subtotal h2'
      ).textContent = `$${this.totalPrice.toFixed(2)}`;
      document.querySelector('.cartNumber p').textContent = this.cartNumber;
    });

    document.querySelector('.products').appendChild(product);

    this.cartNumber += input.value * 1;
    this.totalPrice +=
      input.value * 1 * parseInt(p.textContent[1] + p.textContent[2]);

    if (this.divs.length === 0) {
      this.h2Empty.textContent = '';

      let h1 = document.createElement('h1');
      h1.textContent = 'Subtotal';
      let subtotalDiv = document.querySelector('.subtotal');
      subtotalDiv.appendChild(h1);
      let h2Sub = document.createElement('h2');
      h2Sub.textContent = `$${this.totalPrice.toFixed(2)}`;
      subtotalDiv.appendChild(h2Sub);
      subtotalDiv.style.borderBottom = '1px solid black';
      let cartButton = document.createElement('button');
      cartButton.textContent = 'View Cart';
      document.querySelector('.cartButton').appendChild(cartButton);
    }
    document.querySelector(
      '.subtotal h2'
    ).textContent = `$${this.totalPrice.toFixed(2)}`;
    document.querySelector('.cartNumber p').textContent = this.cartNumber;
    document.querySelector('.bgBlur').classList.add('on');
    document.querySelector('.cart').classList.add('on');
    this.cartIsEmpty();
    this.cartChange();
  }
  deleteProduct(product) {
    this.totalPrice -=
      parseInt(
        product.querySelector('.cartDescription p').textContent[1] +
          product.querySelector('.cartDescription p').textContent[2]
      ) * product.querySelector('input.quantityCart').value;
    document.querySelector(
      '.subtotal h2'
    ).textContent = `$${this.totalPrice.toFixed(2)}`;
    this.cartNumber -= product.querySelector('input.quantityCart').value;
    document.querySelector('.cartNumber p').textContent = this.cartNumber;
    product.remove();
    this.cartIsEmpty();
  }
  cartIsEmpty() {
    if ([...document.querySelectorAll('.product')].length === 0) {
      this.h2Empty.textContent = 'Cart is empty';
      document.querySelector('.products').appendChild(this.h2Empty);
      document.querySelector('.subtotal h1').remove();
      document.querySelector('.subtotal h2').remove();
      document.querySelector('.subtotal').style.borderBottom = '0px';
      document.querySelector('.cartButton button').remove();
      document.querySelector('.cartNumber p').textContent = this.cartNumber;
    }
  }
  cartChange() {
    this.divs = [...document.querySelectorAll('.product')];
    this.deleteX = [...document.querySelectorAll('.fa-x')];
  }
}
