"use strict;";
/*Task 03,
  Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

  console.log(add_ly("hopeless"))  //"hopelessly"
  console.log(add_ly("total"))     //"totally"
  console.log(add_less("fear"))    //"fearless"
  console.log(add_less("ruth"))    //"ruthless"

*/
function add_suffix(str) {
  return function (word) {
    return word + str;
  };
}
const add_ly = add_suffix("ly"),
  add_less = add_suffix("less");
