"use strict;";
/*Task 05,
  Write a function that implements filtering in array.

filterFalsyValues(values); // [true, {}, { name: "Elon" }];
filterFalsyValues(["hello", 1233, []]); // ['hello', 1233, []];

*/
function filter() {
  return function (arr) {
    console.log(arr.filter((item) => item));
  };
}
const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
const filterFalsyValues = filter();
filterFalsyValues(values);
