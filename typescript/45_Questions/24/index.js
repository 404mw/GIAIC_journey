"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// if you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
let quest24 = "Reggera";
console.log(quest24 == "Reggera"); // true
console.log(quest24 == "Veneno"); // false
// Tests using the lower case function
quest24 = quest24.toLowerCase();
console.log(quest24 == "Reggera"); // false
console.log(quest24 == "reggera"); // true
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
quest24 = 222;
// Equality and Inequality
console.log(quest24 == 222); // true
console.log(quest24 == 223); // false
// Greater than and Less than
console.log(quest24 > 99); // true
console.log(quest24 < 99); // false
// greater than or equal to, and less than or equal to
console.log(quest24 >= 333); // fasle
console.log(quest24 >= 111); // true
console.log(quest24 <= 333); // true
console.log(quest24 <= 111); // false
// Tests using "and" operators
console.log(quest24 == 111 && quest24 < 200); // false
console.log(quest24 == 222 && quest24 < 200); // false
console.log(quest24 == 111 && quest24 > 200); // false
console.log(quest24 == 222 && quest24 > 200); // true
// Tests using "or" operators
console.log(quest24 == 222 || quest24 < 200); // true
console.log(quest24 == 111 || quest24 > 200); // true
console.log(quest24 == 222 || quest24 > 200); // true
console.log(quest24 == 111 || quest24 < 200); // false
// Test whether an item is in a array
quest24 = ["A", "B", "C", "D", "E"];
console.log(quest24.includes("D")); // true
console.log(quest24.includes("B")); // true
console.log(quest24.includes("G")); // false
// Test whether an item is not in a array
console.log(!quest24.includes("X")); // true
console.log(!quest24.includes("L")); // true
console.log(!quest24.includes("A")); // false
console.log(!quest24.includes("E")); // false
