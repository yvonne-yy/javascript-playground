/**
 * Passing parameters
 */

// Generator functions with parameters

function* counterGenerator(start=0, end=Infinity) {
    for(let i = start; i < end; i++){
        yield i;
    }
}

const gen = counterGenerator(1,3);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
    

// Generators as observers

function* observerGenerator() {
    console.log('Generator created');

    while (true) {
        const value = yield;
        console.log(`Value passed: ${value}`);
    }
}

const it = observerGenerator();
it.next(1);
it.next(2);
it.next(3);
it.next(4);


// Exercise 6: Create a generator that does the following:
// When the next() method is first called, it returns the value of the question variable.
// Then, the generator waits for an "answer" passed through the following .next() invocation.
// If the answer is the number 42, the generator should yield 'true'.
// Otherwise, it should yield 'false'.

function* solveRiddle() {
    const question = "What's the Answer to the Ultimate Question of Life, the Universe, and Everything?";
    const value = yield question;
    if(value === 42){
        yield true;
    }else{
        yield false;
    }
}

const it_r = solveRiddle();
const question = it_r.next().value;
console.log(question); // "What's the Answer to the Ultimate Question of Life, the Universe, and Everything?"

const result = it_r.next(42).value;
console.log(result); // true

