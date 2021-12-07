"use strict;";
/*Task 07,
  Write a function which remove elements with length <= 3;

filterByLength(["kia", "tesla", "bmw", "mercedes"]); // ['tesla','mercedes']

*/
function filter(num) {
  return function (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] / num >= 1) {
        return "Array does not consist only from uniques!";
      }
    }
    return "Yes array consists only from uniques!";
  };
}
const filterFalsyValues = filter(10);
//console.log(filterFalsyValues([1, 6, 5, 3, 0, 6, 9])); //"Yes array consists only from uniques!"
