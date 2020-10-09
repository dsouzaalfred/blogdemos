const dishesToTotal = [30, 20, 15, 40];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const total = dishesToTotal.reduce(reducer);
console.log(total);
