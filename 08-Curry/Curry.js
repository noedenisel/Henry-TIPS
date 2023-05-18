function curry(fn) {
  // Tu código aquí
  console.log(fn.length);
  const args = []
  return function curried(currentPar){
    // console.log(currentPar);
    args.push(currentPar)
    // console.log(args);
    if(fn.length === args.length) return fn(...args)
    return function(nextPar){
      return curried(nextPar)
    }
  }
}

module.exports = curry;

const calcAllFour = (var1, var2, var3, var4) => {
  return var1 + var2 - var3 * var4;
};

const curriedOne = curry(calcAllFour)
const first = curriedOne(1)
const second = first(2)
const third = second(3)
const fourth = third(4)
console.log(fourth);

// const one = (a) => a + 1
// console.log(curry(one));
// const curriedOne = curry(one)
// console.log(curriedOne(5));

// const two = (a, b) => a + b
// // console.log(curry(two));
// const curriedTwo = curry(two)
// const first = curriedTwo(5)
// console.log(first(5));