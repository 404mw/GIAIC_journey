/*Question 55: Double Numbers in an Array: 
Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
*/


let number55 = [2,4,6,8,10];

let res55 = number55.map(number55 => number55*2)

console.log(res55);



/*Question 56: Keep Only Strings: 
Given a mix of different types of items, make a new list that has only the words.
*/

let items56:any = ["A", "B", 1, 2, "C", 3]

let result56 = items56.filter(item => typeof item === "string")
console.log(result56);



/*Find the Average Grade: Given a list of grades, calculate the average grade.
*/

const grade57 = [95, 82, 69, 45, 89, 40];
const result57 = grade57.reduce((acc, grade) => acc + grade, 0)  / grade57.length;
console.log(result57);
