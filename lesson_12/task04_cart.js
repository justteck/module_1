'use strict';

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set totalPrice(num) {

  },

  set setDiscount(value) {
    if (value === 'METHED') {
      this._discount = 10;
    }

    if (value === 'NEWYEAR') {
      this._discount = 21;
    }
  },

  add(name, cost, quantity) {
    const productName = name;
    const productCost = cost;
    const productQuantity = quantity;

    const item = {
      productName,
      productCost,
      productQuantity,
    };

    this.items.push(item);
    this.increaseCount(productQuantity);
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    const noDiscountPrice = this.items.reduce((acc, current) =>
      acc + (current.productCost * current.productQuantity), 0);

    if (this._discount) {
      return noDiscountPrice * ((100 - this._discount) / 100);
    } else {
      return noDiscountPrice;
    }
  },

  clear() {
    this.items.length = 0;
    this.count = 0;
  },

  print() {
    if (this.items.length === 0) {
      console.log('Card is empty');
    } else {
      this.items.forEach(item =>
        console.log(`${item.productName} : ${JSON.stringify(item)}`));
    }
  },
};

cart.add('Oil', 100, 5);
cart.add('Bread', 50, 2);
cart.add('Banana', 30, 13);
cart.add('Milk', 70, 2);
cart.add('Peach', 100, 2);

// no promocode
cart.print();
console.log('Total price: ', cart.totalPrice);

// promocode
cart.setDiscount = 'NEWYEAR';

cart.print();
console.log('Total price: ', cart.totalPrice);

// clear
cart.clear();
cart.print();
