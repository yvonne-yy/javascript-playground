/**
 * Generators
 */

 function* generator() {
    yield 1;
    yield 2;
    return 15;
    yield 3;
}

const gen = generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());





// Generator function in ES6 classes

class Polygon {
    constructor(...sides) {
        this.sides = sides;
    }

    *[Symbol.iterator](){
        for (let slide of this.sides){
            yield slide;
        }
    }
    // [Symbol.iterator]() {
    //     let currentIndex = 0;

    //     return {
    //         next: () => {
    //             if (currentIndex < this.sides.length) {
    //                 return { value: this.sides[currentIndex++], done: false };
    //             } else {
    //                 return { done: true };
    //             }
    //         }
    //     }
    // }
}

const poly = new Polygon(1, 2, 3, 4, 5);

for (let side of poly) {
    console.log(side);
}





// Exercise 4: Transform the idMaker() function to a generator function

function* idMaker() {
    let id = 0;
    while(true){
        yield id;
        id++;
    }

    // let id = 0;

    // return {
    //     next: () => {
    //         return { value: id++, done: false };
    //     }
    // };
}

const it = idMaker();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
