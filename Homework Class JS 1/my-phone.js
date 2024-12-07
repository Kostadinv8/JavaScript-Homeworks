let phonePrice = 119.95;
let taxRate = 5;
let totalPrice = 0;

let quantity = parseInt(prompt("How many phones would you like to purchase:"));

totalPrice = (phonePrice * (1 + taxRate / 100) * quantity).toFixed(2);

console.log("Requested Quantity:" + quantity)
console.log("Total Phone Price with tax Rate:", totalPrice); 