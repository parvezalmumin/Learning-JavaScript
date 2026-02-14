//Prompt the user to enter their full name. Generate an username for them based on input.Start Username with @, followed by their full name and endig with the full name length

let fullName = prompt("Enter your full name: ");
console.log(fullName);

let userName = "@" + fullName.replace(/\s+/g, '').toLowerCase() + fullName.replace(/\s+/g, '').length;
console.log(userName);

