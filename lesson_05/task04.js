'use strict';

const doSaleQuanity = (cost) => {
  const totalCost = cost * 0.97;
  return totalCost;
}

const doSaleBigPrice = (cost) => {
  const totalCost = 30000 + ((cost - 30000) * 0.85);
  return totalCost;
}

const doSalePromocode = (cost, promo) => {
  let totalCost = cost;
  if (promo === 'METHED') {
    return totalCost * 0.9;
  } else if (promo === 'G3H2Z1') {
    if (totalCost > 2000) {
      return totalCost -= 500;
    }
  }

  return totalCost;
}

const calculate = (cost, quan, promo) => {
  let totalCost = cost;
  const quantity = quan;
  const promocode = promo;

  if (quantity > 10) {
    totalCost = doSaleQuanity(totalCost);

    if (totalCost > 30000) {
      totalCost = doSaleBigPrice(totalCost);
      totalCost = doSalePromocode(totalCost, promocode);
    } else {
      totalCost = doSalePromocode(totalCost, promocode);
    }
  } else if (totalCost > 30000) {
    totalCost = doSaleBigPrice(totalCost);
    totalCost = doSalePromocode(totalCost, promocode);
  } else {
    totalCost = doSalePromocode(totalCost, promocode);
  }

  return totalCost;
}

console.log(calculate(4000, 11, 'G3H2Z1'));