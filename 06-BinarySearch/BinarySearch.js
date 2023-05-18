function BinarySearch(arr, value,result = []){
  console.log(arr);
  console.log(value);
  const middle = Math.floor((arr.length-1)/2)
  console.log(arr[middle]);

}

const testArray = [0,1,2,3,4,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,49,70]

console.log(BinarySearch(testArray, 0)); //output [13,5,2,0]
// console.log(BinarySearch(testArray, 1)); //output [13,5,2,0, 1]
// console.log(BinarySearch(testArray, 50)); //output "Valuee not found"

module.exports = BinarySearch;
