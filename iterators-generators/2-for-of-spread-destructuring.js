/**
 *any data structure with iterator protocol we can use these functions
 * Array, String, Map, custom iterable data
 * 
 * For-of, spread, destructuring
 */

// For-of
//iterate all elements

const name = "Florence";

for(let item of name){
    console.log(item);
}

const it = name[Symbol.iterator]();
for(let item of it){
    console.log(item);
}

//Spread
const letters = [...name];
console.log(letters);


// Exercise 2: Merge the two arrays using spread

let spices = ["cumin", "cardamom", "nutmeg", "ginger"];
let moreSpices = ["clove", "fennel"];


const result = [...spices, ...moreSpices];
console.log(result);

// Destructuring
const [first, second] = spices;
console.log(first, second);

const [f, s] = spices[Symbol.iterator]();
console.log(f,s);