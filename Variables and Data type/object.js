 // ✅ OBJECT EXAMPLE

// Creating an object to represent a person
let person = {
  name: "Tisha",         // String property
  age: 21,               // Number property
  isStudent: true,       // Boolean property
  country: "Bangladesh"  // Another string
};

// Printing the whole object
console.log("Person Object:", person);


// Accessing individual properties using dot notation
console.log("Name:", person.name);         // Tisha
console.log("Age:", person.age);           // 21
console.log("Student?", person.isStudent); // true
console.log("Country:", person.country);   // Bangladesh


// Updating a value
person.age = 22;
console.log("Updated Age:", person.age);


// Adding a new property
person.hobby = "Drawing";
console.log("Hobby:", person.hobby);

// Summary log
console.log("Updated Person Object:", person);

