const dishesToMap = ['steak', 'fried rice', 'clear soup'];
const addEggs = (dish) => 'fried egg + ' + dish;

const updatedDishesToMap = dishesToMap.map(addEggs);
console.log(updatedDishesToMap);
