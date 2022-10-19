'use strict';

{
  const product = 'bread';
  const productQuantity = 10;
  const productCategory = 'food';
  const productPrice = 50;

  console.log('Product name:', product);
  console.log('Total price:', productQuantity * productPrice);
}

{
  const product = 'butter';
  const productQuantity = 40;
  const productCategory = 'food';
  const productPrice = 10;

  console.log('Product name:', product);
  console.log('Total price:', productQuantity * productPrice);
}

{
  const product = prompt('Enter the product name:', 'shower gel');
  const productQuantity = +prompt('Enter the quantity:', 5);
  const productCategory = prompt('Enter the product category:', 'bathroom');
  const productPrice = +prompt('Enter the product price:', 300);
  
  console.log('product: ', typeof product);
  console.log('productQuantity: ', typeof productQuantity);
  console.log('productCategory: ', typeof productCategory);
  console.log('productPrice: ', typeof productPrice);

  console.log(`There are ${productQuantity} ${product} units at the warehouse. Total cost is ${productQuantity * productPrice}`);
}

