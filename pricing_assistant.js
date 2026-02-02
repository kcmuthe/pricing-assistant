let productName = "Protein Shake"
let costPerUnit = 3;
let basePrice = 6.50;
let discountRate = 0.10;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 250;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit (Boolean): profitPerUnit > 0;


console.log("Product Name: " + productName);
console.log("Discounted Price $" + discountedPrice);
console.log("Final Price With Tax: $" + finalPriceWithTax);
console.log("Profit per Unit: " + profitPerUnit);
console.log("Break-Even Units: "+ breakEvenUnits);
console.log("Is profitable per Unit: " + isProfitablePerUnit)
