 // ✨ Comparison Operators Examples

let a = 5;
let b = "5";
let c = 3;

// ✅ Equal (==) — loose equality (value only, not type)
console.log("a == b:", a == b); // true (values are equal)

// ✅ Strict Equal (===) — checks value AND type
console.log("a === b:", a === b); // false (number !== string)

// ✅ Not Equal (!=) — loose inequality
console.log("a != c:", a != c); // true (5 != 3)

// ✅ Strict Not Equal (!==) — checks value AND type
console.log("a !== b:", a !== b); // true (5 !== "5")

// ✅ Greater Than (>)
console.log("a > c:", a > c); // true (5 > 3)

// ✅ Less Than (<)
console.log("c < a:", c < a); // true (3 < 5)

// ✅ Greater Than or Equal (>=)
console.log("a >= 5:", a >= 5); // true

// ✅ Less Than or Equal (<=)
console.log("c <= 5:", c <= 5); // true
