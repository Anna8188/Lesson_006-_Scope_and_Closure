"use strict;";
/*Task 06,
  Write a function which remove elements with length <= 3;

filterByLength(["kia", "tesla", "bmw", "mercedes"]); // ['tesla','mercedes']

*/
function filter(num) {
  return function (string) {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
      if (num < string[i].length) {
        arr.push(string[i]);
      }
    }
    console.log(arr);
  };
}
const str = ["kia", "tesla", "bmw", "mercedes"];
const filterFalsyValues = filter(3);
filterFalsyValues(str);
