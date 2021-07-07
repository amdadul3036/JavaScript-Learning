// https://javascript.info/array-methods
// https://www.w3schools.com/jsref/jsref_obj_array.asp
// Next Process

let [tomato,Apple,Pinaple] = [1,2,3];
document.write(tomato + '</br>') ;

document.write(Pinaple);



// ------------------------------------------------------------------------------------------------------------
/*
Array Destructuring in JavaScript
With ECMAScript 6 (ES6), we have some new syntax to extract multiple properties from an array and assign them to variables in one go. It is handy to help you keep your code clean and concise. This new syntax is called destructuring syntax.

Here is an example of extracting the values from an array using the destructuring syntax:

let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
Now you can use the variables in your code:

console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕
To do the same thing without the destructuring, it would look like this:

let vegetables = ['🍅', '🍄', '🥕'];
let tomato = vegetables[0];
let mushroom= vegetables[1];
let carrot= vegetables[2];
So, the destructuring syntax saves you from writing lots of code. This gives you a massive boost in productivity.

*/