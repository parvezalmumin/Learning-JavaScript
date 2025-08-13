// Initial Array
let fruits = ["Apple", "Banana", "Orange"];
console.log("Initial Array:", fruits);

// push() → Add to the end
fruits.push("Mango");
console.log("After push:", fruits);

// pop() → Remove from the end
fruits.pop();
console.log("After pop:", fruits);

// shift() → Remove from the start
fruits.shift();
console.log("After shift:", fruits);

// unshift() → Add to the start
fruits.unshift("Strawberry");
console.log("After unshift:", fruits);

// length → Get number of elements
console.log("Array length:", fruits.length);

// slice() → Extract a section without changing original
let slicedFruits = fruits.slice(0, 2);
console.log("Sliced fruits (0,2):", slicedFruits);
console.log("Original array after slice:", fruits);

// splice() → Add/remove elements at a specific index
fruits.splice(1, 1, "Pineapple", "Grapes"); // remove 1 element at index 1 and add 2
console.log("After splice:", fruits);

// for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Index ${i}:`, fruits[i]);
}

// for...of loop
console.log("Using for...of loop:");
for (let fruit of fruits) {
  console.log(fruit);
}