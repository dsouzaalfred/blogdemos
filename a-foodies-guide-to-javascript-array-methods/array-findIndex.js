// array-findIndex.js

// dishes on the buffet
const dishesOnTheBuffet = [
  'steak',
  'biryani',
  'kebbabs',
  'vanilla cake',
  'chocolate cake',
];

// dish you want to find
const findChocolateCake = (dish) => dish === 'chocolate cake';

// getting the location of the dish
console.log(dishesOnTheBuffet.findIndex(findChocolateCake));

// output: 4
