"use strict;";
/*Task 9.
  Given an array of numbers. Find the sum of numbers quadratic which are even.
*/
function SumOfQuadratic(arr) {
  let newArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i] ** 2);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    sum = sum + newArr[i];
  }
  return sum;
}
