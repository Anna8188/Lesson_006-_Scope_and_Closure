"use strict;";
/*Task 08,
  Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word or phrase without a repeating letter;
*/
function isIsogram(str) {
  if (typeof str !== "string") {
    return "Please check your input.";
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    let newArr = str.substring(i);
    if (newArr.indexOf(str[i]) === -1) {
      return "It is not an isogram phrase!";
    }
  }
  return "It is an isogram phrase!";
}
