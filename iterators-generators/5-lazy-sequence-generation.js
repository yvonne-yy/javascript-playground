/**
 * Lazy Sequence Generation
 */

// Fibonacci numbers
function* FibonacciGenerator (){
    let l0 = 0;
    let l1 = 1;
    while(true){
       yield l0;
       [l0, l1] = [l1, l0 + l1];
    } 
}

const f = FibonacciGenerator();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());








// Exercise 5: Write a generator function that yields prime numbers

const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num > 1;
}

function* primeNumbersGenerator() {
    let n = 1;
    while(true){
        if(isPrime(n)){
            yield n;
        }
        n++;
    }
}

const primeNumbersGen = primeNumbersGenerator();
console.log(primeNumbersGen.next().value); // 2
console.log(primeNumbersGen.next().value); // 3
console.log(primeNumbersGen.next().value); // 5
console.log(primeNumbersGen.next().value); // 7
console.log(primeNumbersGen.next().value); // 11
