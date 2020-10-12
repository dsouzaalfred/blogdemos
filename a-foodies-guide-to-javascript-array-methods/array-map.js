// array-map.js

// dishes
const dishesToMap = ['steak', 'fried rice', 'clear soup'];

// function to add fried egg
const addEggs = (dish) => 'fried egg + ' + dish;

// updated dishes
const updatedDishesToMap = dishesToMap.map(addEggs);
console.log(updatedDishesToMap);

// output: ["fried egg + steak", "fried egg + fried rice", "fried egg + clear soup"]
