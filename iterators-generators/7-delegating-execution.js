/**
 * Passing parameters
 */

// yield*

function* ItalianCitiesGenerator(){
    yield* ['Rom', 'Florence', 'Turin'];
    yield 'Gonoa';
    return 'YY';
}

function* citiesGenerator() {
    yield 'Paris';
    const value = yield*ItalianCitiesGenerator();
    yield value;
    yield 'Berlin';
}

// const it = citiesGenerator();
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

// console.log(it.next());






// Exercise 7: Flatten an array

function* flatten(array, depth = 1) {
    for (let item of array) {
        if (Array.isArray(item) && depth > 0) {
            yield* flatten(item, depth-1);
            depth--;
        } else {
            yield item;
        }
    }
}

const arr = [1, 2, [3, 4, [5, 6]]];
//const flattened = [...flatten(arr, Infinity)];
//console.log(flattened); // [1, 2, 3, 4, 5, 6]

const flattened = [...flatten(arr, 0)];
console.log(flattened);

// const flattened = [...flatten(arr, 1)];
// console.log(flattened); 
