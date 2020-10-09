const dinnerDishes = [
  { name: 'biryani', hasMeat: true },
  { name: 'french fries', hasMeat: false },
  { name: 'jeera rice', hasMeat: false },
  { name: 'butter chicken', hasMeat: true },
];
const dishesWithMeat = (dish) => dish.hasMeat;
console.log(dinnerDishes.every(dishesWithMeat));
