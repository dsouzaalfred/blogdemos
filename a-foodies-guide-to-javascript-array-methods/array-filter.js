//array-filter.js

// dishes
const dishesToFilter = [
  { name: 'steak', hasVeggies: false },
  { name: 'fried rice', hasVeggies: false },
  { name: 'stir fried vegetables', hasVeggies: true },
];

// function to filter dishes with vegetables
const removeDishesWithVeggies = (dish) => !dish.hasVeggies;

// filtering dishes
const updatedDishesToFilter = dishesToFilter.filter(removeDishesWithVeggies);
console.log(updatedDishesToFilter);

// output: [{ name: "steak", hasVeggies: false }, { name: "fried rice", hasVeggies: false }]
