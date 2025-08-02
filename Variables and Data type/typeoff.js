// ✅ Using typeof to detect variable types

let name = "Parvez";             // string
let age = 25;                    // number
let isStudent = true;           // boolean
let address;                    // undefined

let person = {
  name: "Tisha",         
  age: 21,               
  isStudent: true,       
  country: "Bangladesh"  
};

// 🔍 Checking types using typeof
console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof address);   // "undefined"
console.log(typeof person);   // "object"
