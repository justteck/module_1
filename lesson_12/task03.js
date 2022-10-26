'use strict';

// Не совсем понял, как задать параметры по умолчанию.
// Можно this._height = 5 в объекте, но тогда какой смысл в сеттерах,
// они же должны защищать пременные?

const rectangle = {
  set width(num) {
    if (Number.isFinite(num)) {
      this._width = num;
    } else this._width = 5;
  },

  set height(num) {
    if (Number.isFinite(num)) {
      this._height = num;
    } else this._height = 5;
  },

  get area() {
    return `${this._width * this._height} см кв`;
  },

  get perimetr() {
    return `${(this._width + this._height) * 2} см`;
  },
};

rectangle.width = 10;
rectangle.height = 20;

console.log(rectangle.area);
console.log(rectangle.perimetr);

console.table(rectangle);
