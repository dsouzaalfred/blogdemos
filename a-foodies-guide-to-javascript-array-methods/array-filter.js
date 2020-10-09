const dishesToFilter = [
  { name: 'steak', hasVeggies: false },
  { name: 'fried rice', hasVeggies: false },
  { name: 'stir fried vegetables', hasVeggies: true },
];
const removeDishesWithVeggies = (dish) => !dish.hasVeggies;

const updatedDishesToFilter = dishesToFilter.filter(removeDishesWithVeggies);
console.log(updatedDishesToFilter);
