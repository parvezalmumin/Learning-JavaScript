// STRING BASICS IN JS 

//  String Length
// str.length returns the number of characters in a string.
var str = "Hello";
console.log("Length:", str.length);  // Length: 5

// String Indexing
// Access each character using its index (starting from 0)
console.log("Index 0:", str[0]);  // Index 0: H
console.log("Index 1:", str[1]); // Index 1: e
console.log("Index 2:", str[2]); // Index 2: l

/*
  Template Literals (String Interpolation) 
      - Use backticks ` instead of quotes       
      - Embed variables using ${expression}       
*/
var name = "Parvez";
var age = 22;

var msg = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(msg);
// Output: Hello, my name is Parvez and I am 22 years old.

//Escape Sequences
var secondLine = "Hello\nWorld"; // \n = New Line
console.log(secondLine);

var tab = "Welcome\tto\tJS";     // \t = Tab Space
console.log(tab);

/*
  COMMON STRING METHODS IN JS 
*/
var str1 = "Tommorrow I have to go to join my classes."
// toUpperCase()
console.log("Uppercase:", str1.toUpperCase()); 

// toLowerCase() 
console.log("Lowercase:", str1.toLowerCase()); 

// trim()
// Removes spaces from both ends
var str2 = "    Space    "
console.log("Trimmed:", str2.trim()); 

// slice(start)
// Extracts from index to end
var str3 = "Get Out!"
console.log("Slice from 2:", str3.slice(2));

// slice(start, end)
// Extracts from index 2 to 5 (not including 5)
console.log("Slice from 2 to 5:", str3.slice(2, 5));

//  concat()
// Joins strings together
var greet = "Hi";
var target = "there!";
var greetings = greet.concat(target);
console.log(greetings);

var lastname = "Mumin";
var firstname = "Parvez";
var fullname = firstname.concat(lastname);
console.log(fullname);

// + operator for string addition
var first = "Good";
var second = "Morning";
console.log("Using +:", first + " " + second); 

// replace()
// Replaces first match only
var text = "I love Banana. Banana is sweet.";
console.log("Replace:", text.replace("Banana", "Mango")); 

// replaceAll()
// Replaces all occurrences
console.log("ReplaceAll:", text.replaceAll("Banana", "Mango")); 

// charAt(index)
// Returns the character at specified index
var str4 = "Masho"
console.log("Char at 2:", str4.charAt(2)); 
