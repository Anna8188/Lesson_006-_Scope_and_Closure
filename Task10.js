"use strict;";
/*Task 10.
  Check whether string is palindrome, or not.
*/
function palindrome(str) {
  if (typeof str !== "string") {
    return "Please check your input.";
  }
  for (let i = 0; i < (str.length - 1) / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return "String is not palindrome";
    }
  }
  return "String is palindrome";
}
//console.log(palindrome("amijolkna")); //String is not palindrome
//console.log(palindrome("poaop")); //String is palindrome
