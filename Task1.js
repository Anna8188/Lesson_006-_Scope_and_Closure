"use strict;";
/*Task 01,
  Create a function that implements partial sum

  console.log(add0ne(2))  //3
  console.log(add1ne(2))  //12
  console.log(add0ne(4))  //5 
  console.log(add1ne(10)) //20

*/

function sum(a) {
  return function (b) {
    return a + b;
  };
}
const add0ne = sum(1);
const add1ne = sum(10);
