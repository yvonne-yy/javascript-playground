/**
 * Custom iterators
 */

 class Polygon {
    constructor(...sides) {
        this.sides = sides;
    }

    [Symbol.iterator](){
        let currentSideIndex = 0;
        return {
            next:()=>{
                if(currentSideIndex < this.sides.length){
                    return  {value: this.sides[currentSideIndex++], done:false};
                }else{
                    return { done: true};
                }

            }
        }
    }
}

const poly = new Polygon(1, 2, 3, 4, 5);

for (let side of poly) {
    console.log(side);
}





// Exercise 3: Make the function return an iterator.
// The first id produced by the iterator should be 0, the next should be 1,
// the one after should be 2 and so on.

function idMaker() {
    let id=0;
    return {
        next: ()=>{
            return { value: id++, done: false};
        }
    }
}

const it = idMaker();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2

