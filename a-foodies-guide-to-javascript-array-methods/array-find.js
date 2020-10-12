// array-find.js

// dishes served by a restaurant
const restaurant2Menu = ['steak', 'biryani', 'kebbabs'];

// dish you want to find
const findBiryani = (dish) => dish === 'biryani';

// find the dish
console.log(restaurant2Menu.find(findBiryani));

// output: biryani
