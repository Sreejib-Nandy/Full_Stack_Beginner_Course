// alert("Hello, Sreejib");

console.log("First log from console from app.js") // First log from console from app.js

// We basically use let & const for variable assigning, var is deprecated
let name = "Sreejib Nandy";
let age = 20;
console.log("Name : ",name ,"and Age : ",age); // Name :  Sreejib Nandy and Age :  20

// Conditional Operators
if(age > 18) {
    console.log("You are an adult") // You are an adult
} else {
    console.log("You are not an adult")
}

// Arithmetic Operators
let a = 3
let b = 10
console.log("a + b =",a+b) // 13
console.log("a - b =",a-b) // -7
console.log("a * b =",a*b) // 30
console.log("a / b =",a/b) // 0.3
console.log("a % b =",a%b) // 3


console.log(5 == "5") // true (relaxed type checking)
console.log(5 === "5") // false (strict type checking)

// For Loops
for(let i = 1; i <= 5; i++) {
    console.log("Iterator using for loop : ",i)
}

// While Loops
let j = 10
while(j <= 15) {
    console.log("Iterator using while loop : ",j)
    j++
}

// Functions 
function greet(name) {
    console.log("Hello,",name) //Hello, Sreejib
}
// greet("Sreejib");

// DOM Manipulation
function textChange() {
    document.getElementById("head").innerText = "Sreejib Nandy";
}

function showName() {
    let data = document.getElementById("input").value;
    alert("Name : "+ data)
}

// Arrays
let subjects = ["English", "CO", "DSA", "Analog&Digital"];
console.log(subjects[2]) // DSA

console.log(subjects[4]); // undefined
subjects.push("Economics");
console.log(subjects[4]); // Economics
for(let p = 0; p < subjects.length; p++) {
    console.log("Subject is : ", subjects[p]);
}

// Objects
let object = {
    name : "Sreejib",
    age : 20
}
console.log("Name is : "+ object.name); // Name is : Sreejib
console.log("Age is : "+ object.age); // Age is : 20

