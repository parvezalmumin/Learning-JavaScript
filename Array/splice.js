 var fruits = ["apple", "banana", "orange", "mango"];
console.log("Original:", fruits);

// Add element at index 2
fruits.splice(2, 0, "grapes");
console.log("After Adding:", fruits);

// Delete element at index 1
fruits.splice(1, 1);
console.log("After Deleting:", fruits);
fruits.splice(1);
console.log("After Deleting:", fruits);

// Replace element at index 0
fruits.splice(0, 1, "pineapple");
console.log("After Replacing:", fruits);