// Task 1: If Statements - Customer Discounts
let purchaseAmount = 120; // Example purchase amount
let finalAmount = purchaseAmount;

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9; // 10% discount
}
console.log(`Final amount after discount: $${finalAmount}`);

// Task 2: For Loop - Sales Report
let sales = [120, 85, 200, 150, 90]; // Array of sales amounts
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i]; // Summing up sales
}
console.log(`Total sales: $${totalSales}`);
