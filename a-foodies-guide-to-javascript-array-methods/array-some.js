// array-some.js

// dishes
const restaurant4Menu = [
  { name: 'fried rice', hasPotatoes: false },
  { name: 'french fries', hasPotatoes: true },
  { name: 'stir fried vegetables', hasPotatoes: true },
];

// function to check if a dish has potato
const hasDishesWithPotatoes = (dish) => dish.hasPotatoes;

// checking all the dishes in the restaurant
console.log(restaurant4Menu.some(hasDishesWithPotatoes));

// output: true
