# Lesson_006-\_Scope_and_Closure

[<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Jc_MeT4g--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/necgc1m86c4arkmeu40p.png" width="300" height="150" />](https://res.cloudinary.com/practicaldev/image/fetch/s--Jc_MeT4g--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/necgc1m86c4arkmeu40p.png)

- Create a function that implements partial sum.

  - sum(1)(2); // 3

  const addOne = sum(1);

  - addOne(2); // 3

  const addTen = sum(10);

  - addTen(2); // 12
  - addOne(4); // 5
  - addTen(10); // 20

  [SEE Solution](./Task1.js)

- Write a function redundant that takes in a string str and returns a function that returns str.

  - const f1 = redundant("apple") ---- f1() ➞ "apple"

  - const f2 = redundant("pear") ---- f2() ➞ "pear"

  - const f3 = redundant("") ---- f3() ➞ ""

  [SEE Solution](./Task2.js)

- Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

  add_ly = add_suffix("ly");

  - add_ly("hopeless") ➞ "hopelessly"

  - add_ly("total") ➞ "totally"

  add_less = add_suffix("less");

  - add_less("fear") ➞ "fearless"

  - add_less("ruth") ➞ "ruthless"

  [SEE Solution](./Task3.js)

- Create a function printAfter that calls its argument after printing hello world.

  const print = () => console.log("Elon Musk");

  printAfter(print); ➞ // 'hello, world' // 'Elon Musk'

  [SEE Solution](./Task4.js)

- Write a function that implements filtering in array.

  const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

  - filterFalsyValues(values); ➞ [true, {}, { name: "Elon" }];

  - filterFalsyValues(["hello", 1233]); ➞ ['hello', 1233];

  [SEE Solution](./Task5.js)

- Write a function which remove elements with length <= 3.

  - filterByLength(["kia", "tesla", "bmw", "mercedes"]); ➞ ['tesla',
    'mercedes']

  [SEE Solution](./Task6.js)

- Given an array. Determine whether it consists only from uniques or not.

  [SEE Solution](./Task7.js)

- Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a
  word or phrase without a repeating letter.

  [SEE Solution](./Task8.js)

- Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

  [SEE Solution](./Task9.js)

- Check whether string is palindrome, or not.

  [SEE Solution](./Task10.js)

- Given an array of integers, find the pair of adjacent elements that has the largest product and return
  that product.

  [SEE Solution](./Task11.js)
