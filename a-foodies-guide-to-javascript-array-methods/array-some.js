const restaurant4Menu = [
  { name: 'fried rice', hasPotatoes: false },
  { name: 'french fries', hasPotatoes: true },
  { name: 'stir fried vegetables', hasPotatoes: true },
];
const hasDishesWithPotatoes = (dish) => dish.hasPotatoes;
console.log(restaurant4Menu.some(hasDishesWithPotatoes));
