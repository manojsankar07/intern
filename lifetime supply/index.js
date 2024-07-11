var current_age = prompt("Enter your current age:");
var maximum_age = prompt("Enter your maximum age:");
var amount = prompt("Enter the estimated amount per day to eat:");

current_age = Number(current_age);
maximum_age = Number(maximum_age);
amount = Number(amount);

var lifetime_supply = (maximum_age - current_age) * amount * 365;
console.log("You will need " + lifetime_supply + " to last you until the ripe old age of " + maximum_age + ".");
