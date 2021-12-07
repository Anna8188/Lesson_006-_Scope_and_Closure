"use strict;";
/*Task 11.
  Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
*/

function MaxProduct(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (typeof arr[i] !== "number") {
      return "Please check your input.";
    }
    for (let j = 1; j < arr.length; j++) {
      newArr.push(arr[i] * arr[j]);
    }
  }
  return Math.max.apply(null, newArr);
}
