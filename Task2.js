"use strict;";
/*Task 02,
  Write a function redundant that takes in a string str and returns a function that returns str.
  console.log(f1) // "apple"
  console.log(f2) // "pear"
  console.log(f3) //  ""
*/
function redundant(str) {
  let string = `"`;
  return function () {
    return string + str + string;
  };
}
const f1 = redundant("apple"),
  f2 = redundant("pear"),
  f3 = redundant("");
