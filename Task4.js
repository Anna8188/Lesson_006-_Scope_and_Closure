"use strict;";
/*Task 04,
  Create a function printAfter that calls its argument after printing hello world

    printAfter(print);              // 'hello, world'
                                    // 'Elon Musk'

*/
function PrintAfter(cb) {
  console.log("hello, word");
  cb();
}
const print = () => console.log("Elon Musk");

PrintAfter(print);
