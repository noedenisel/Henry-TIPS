function spyOn(fn) {
  // Tu código aquí
  let callCount = 0;
  const calledWith = new Map()
  const returned = new Map()

  const spy = (...args) => {
    callCount++
    // calledWith.set(n1,true)
    // calledWith.set(n2,true)
    for (const arg of args) calledWith.set(arg,true)
    const result = fn(...args)
    returned.set(result,true)
    // console.log(calledWith);
    // console.log(returned);
    return result
  }

  spy.getCallCount = () => callCount
  spy.wasCalledWith = val => calledWith.get(val) ? true : false
  spy.returned = val => !!returned.get(val) 

  

  return spy
}

const adder = (n1, n2) => {
  return n1 + n2;
};

const adderSpy = spyOn(adder)
// console.log(adderSpy);

// console.log(adderSpy(4,5));

// console.log(adderSpy.getCallCount())//(0);
// adderSpy(2, 3);
// console.log(adderSpy.getCallCount())//(1);
// adderSpy(4, 5);
// adderSpy(5, 6);
// console.log(adderSpy.getCallCount())//(3);


// adderSpy(2, 3);
// console.log(adderSpy.wasCalledWith(2))//(true);
// console.log(adderSpy.wasCalledWith(3))//(true);

// console.log(adderSpy.wasCalledWith(4))//(false);
// console.log(adderSpy.wasCalledWith(5))//(false);


adderSpy(2, 3);
adderSpy(2, 4);
console.log(adderSpy.returned(5))//(true);
console.log(adderSpy.returned(6))//(true);
console.log(adderSpy.returned(7))//(false);
console.log(adderSpy.returned(8))//(false);

module.exports = spyOn;
