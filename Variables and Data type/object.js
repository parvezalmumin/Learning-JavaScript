 // ✅ OBJECT EXAMPLE

// Creating an object to represent a person
let person = {
  name: "Tisha",         // String property
  age: 21,               // Number property
  isStudent: true,       // Boolean property
  country: "Bangladesh"  // Another string property
};

// Printing the whole object
console.log("Person Object:", person);

// Accessing individual properties using dot notation
console.log("Name:", person.name);         // Output: Tisha
console.log("Age:", person.age);           // Output: 21
console.log("Student?", person.isStudent); // Output: true
console.log("Country:", person.country);   // Output: Bangladesh

//  Updating a value
person.age = 22; // Changing age from 21 to 22
console.log("Updated Age:", person.age); // Output: 22

//  Adding a new property
person.hobby = "Drawing"; // Adding 'hobby' property
console.log("Hobby:", person.hobby); // Output: Drawing

//  Adding another property
person.email = "tisha@example.com"; // Adding 'email' property
console.log("Email:", person.email); // Output: tisha@example.com

//  Deleting a property
delete person.email; // Removes 'email' from the object
console.log("After Deleting Email:", person);

// 📌 Summary log
console.log("Updated Person Object:", person);
