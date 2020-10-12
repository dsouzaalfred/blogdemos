// array-reduce.js

// cost of each dish
const dishesToTotal = [30, 20, 15, 40];

// reducer: accumulator => stores the total, currentValue => price of the current dish
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// calculate the total
const total = dishesToTotal.reduce(reducer);
console.log(total);

// output: 105
