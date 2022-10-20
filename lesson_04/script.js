'use strict';

  const product = prompt('Enter the product name:', 'shower gel');
  let productQuantity = prompt('Enter the quantity:', 5);
  const productCategory = prompt('Enter the product category:', 'bathroom');
  let productPrice = prompt('Enter the product price:', 300);

  if ((productQuantity !== null && productQuantity !== '') &&
      (productPrice !== null && productPrice !== '') &&
      Number.isFinite(+productQuantity) && Number.isFinite(+productPrice)) {

    console.log(`There are ${productQuantity} ${product} units at the warehouse. Total cost is ${productQuantity * productPrice}`);
    
  } else {
    console.log('The entered data is uncorrect');
  }