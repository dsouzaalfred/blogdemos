// array-every.js

// dishes served at dinner
const dinnerDishes = [
  { name: 'biryani', hasMeat: true },
  { name: 'french fries', hasMeat: false },
  { name: 'jeera rice', hasMeat: false },
  { name: 'butter chicken', hasMeat: true },
];

// function to check if they have meat.
const dishesWithMeat = (dish) => dish.hasMeat;

// checking if all dishes have meat.
console.log(dinnerDishes.every(dishesWithMeat));

// output: false
