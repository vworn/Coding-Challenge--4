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

// Task 3: While Loop - Inventory Depletion
let stock = 10; // Initial stock count

while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--; // Reducing stock one by one
}
console.log("Stock depleted.");

// Task 4: Do...While Loop - Customer Survey
let responses = 0; // Start with no responses

do {
    responses++; // Simulate getting a response
    console.log(`Response count: ${responses}`);
} while (responses < 3); // Stop when 3 responses are collected

// Task 5: For...In Loop - Employee Information
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};

for (let key in employee) {
    console.log(`${key}: ${employee[key]}`); // Loop through object properties
}