function calculateTotalPrice(allProducts, productName) {
    for (const product of allProducts) {
      if (product.name === productName) {
        return product.price * product.quantity;
      }
    }
    return 0;
}
  

const shopProducts = [
    { name: 'Computer', price: 40000, quantity: 20 },
    { name: 'Phone', price: 20000, quantity: 30 },
    { name: 'Tablet', price: 20000, quantity: 10 },
];
  
const totalPrice = calculateTotalPrice(shopProducts, 'Phone');
console.log(totalPrice);