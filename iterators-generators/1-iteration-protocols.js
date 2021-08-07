/**
 * Iteration protocols
 */

// Iterables and iterators

const text = "Rhyme";

const it = text[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Exercise 1: Use an iterator to visit and print all elements in the array.

const cities = ["Sofia", "New Delhi", "Tokyo"];
const it = cities[Symbol.iterator]();
let result = it.next();
