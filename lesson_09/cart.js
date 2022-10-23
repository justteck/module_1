'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
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
    this.calculateItemPrice();
  },

  increaseCount(num) {
    this.count += num;
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, current) =>
      acc + (current.productCost * current.productQuantity), 0);
  },

  clear() {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    if (this.items.length === 0) {
      console.log('Card is empty');
    } else {
      this.items.forEach(item => console.log(`${item.productName} : ${JSON.stringify(item)}`));
    }
    
  },
};

cart.add('Oil', 100, 5);
cart.add('Bread', 50, 2);
cart.add('Banana', 30, 13);
cart.add('Milk', 70, 2);
cart.add('Peach', 100, 2);

cart.print();

console.log('Total price: ', cart.getTotalPrice());

cart.clear();

cart.print();

