function getAllPropValues(arr, prop) {
    const propValues = [];
  
    for (const obj of arr) {
        if (obj.hasOwnProperty(prop)) {
            propValues.push(obj[prop]);
        }
    }  
    return propValues;
}
  

const shopProducts = [
    { name: 'Computer', price: 40000 },
    { name: 'Phone', price: 20000 },
    { name: 'Tablet', price: 20000 },
];
  
const prices = getAllPropValues(shopProducts, 'price');
console.log(prices);