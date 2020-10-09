const restaurant3Menu = [
  'steak',
  'biryani',
  'kebbabs',
  'vanilla cake',
  'chocolate cake',
];
const findChocolateCake = (dish) => dish === 'chocolate cake';
console.log(restaurant3Menu.findIndex(findChocolateCake));
