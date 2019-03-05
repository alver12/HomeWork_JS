var sizes = [{
  name: 'small',
  price: 100
},
{
  name: 'medium',
  price: 150
},
{
  name: 'large',
  price: 200
}
]

var stuffings = [{
  name: 'chicken',
  price: 50
},
{
  name: 'pork',
  price: 70
},
{
  name: 'beef',
  price: 90
}
]

var toppings = [{
  name: 'pepper',
  price: 20
},
{
  name: 'cheese',
  price: 15
},
{
  name: 'tomato',
  price: 10
},
{
  name: 'salad',
  price: 5
}
]


var Burger = function() {
  this.size = sizes[0];
  this.stuffing = stuffings[0];
  this.toppings = [];
}

Burger.prototype.setSize = function(sizeName) {
  for (var i = 0; i < sizes.length; i++) {
    if (sizes[i].name === sizeName) {
      this.size = sizes[i];
      return sizes[i];
    }
  }
}

Burger.prototype.setStuffing = function(stuffingName) {
  for (var i = 0; i < stuffings.length; i++) {
    if (stuffings[i].name === stuffingName) {
      this.stuffing = stuffings[i];
      return stuffings[i];
    }
  }
}

var result = [];
toppings.forEach(function(item) {
     if(result.indexOf(item) < 0) {
         result.push(item);
     }
});
console.log(result);

Burger.prototype.checkedTopping = function(toppingName){
  for (var i = 0; i < this.toppings.length; i++) { 
    if(this.toppings[i].name === toppingName){
      return true;
    } 
  }
  return false;
}

Burger.prototype.addTopping = function(toppingName) {
  const self = this;
  toppings.forEach(function(item) {
    if (item.name === toppingName) {
      if (self.checkedTopping(toppingName)){
        console.log('Такой топпинг уже есть!');
      } else{
        self.toppings.push(item);
      }
    }
  });
}
///////////=>=>=>=>=>=>=>=>=>=>=>/////
// Burger.prototype.addTopping = function(toppingName) {
//   toppings.forEach((item)=> {
//     if (item.name === toppingName) {
//       if (this.checkedTopping(toppingName)){
//         console.log('Такой топпинг уже есть!');
//       } else{
//       this.toppings.push(item);
//       }
//     }// Должен добавить топпинг если его еще нет в списке топпингов. Если уже есть - показать ошибку
//   });
// }
//////////////////////////////////////
// Burger.prototype.addTopping = function(toppingName) {
//   for (var i = 0; i < toppings.length; i++) {  
//     if (toppings[i].name === toppingName) {
//       if (this.checkedTopping(toppingName)){
//         console.log('Такой топпинг уже есть!');
//       } else{
//       this.toppings.push(toppings[i]);
//       }
//       break;
//     }// Должен добавить топпинг если его еще нет в списке топпингов. Если уже есть - показать ошибку
//   }
// }

Burger.prototype.removeTopping = function(toppingName) {
  for (var i = 0; i < this.toppings.length; i++) {  
    if (toppings[i].name === toppingName) {
      this.toppings.splice(i, 1);
      console.log(this.toppings);
      break;
    }
  }
  console.log('Такой топпинг уже удален!');
}

// toppings.forEach(function(item, ind) {
//   if (item.name === 'cheee')
//   console.log('ind: ', ind);
//   console.log('item: ', item);
// });

Burger.prototype.calculatePrice = function() {
// console.log (this.size.price);
// console.log (this.stuffing.price);
// console.log (this.toppings.price);
// console.log (this);
var topprice = 0;
  for (var i = 0; i < this.toppings.length; ++i) {  
    // this.toppings = toppings[i];
    topprice +=  this.toppings[i].price;
    console.log( topprice);
  }
  return this.size.price + this.stuffing.price + topprice;
}

var burger1 = new Burger();

burger1.setSize('large');
burger1.setStuffing('pork');
// console.log(burger1.calculatePrice());
// burger1.addTopping('salad');
burger1.addTopping('pepper');
burger1.addTopping('cheese');
burger1.addTopping('tomato');
burger1.addTopping('cheese');
burger1.removeTopping('cheese');
// burger1.removeTopping('pepper');
console.log(burger1);
console.log(burger1.calculatePrice());

// Посмотреть методы (попробовать применить в ДЗ) по работе с массивами, которые были добавлены в ES6 (find, map, forEach, filter, findIndex...)
