// 1. A capitalize function that takes a string and returns it with the first character capitalized.

const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} = require("./testing.js");

test("files are testing well", () => {
  expect(capitalize("string")).toBe("String");
});

// 2. A reverseString function that takes a string and returns it reversed.

test("Take string and return it reversed", () => {
  expect(reverseString("abcdefg")).toBe("gfedcba");
});

// 3. A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

test("Addition works", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtraction works", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("Divide works", () => {
  expect(calculator.divide(16, 2)).toBe(8);
});

test("Multiply works", () => {
  expect(calculator.multiply(2, 8)).toBe(16);
});

// 4. A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works.
// Don’t forget to test wrapping from z to a. For example, caesarCipher('xyz', 3) should return 'abc'.
// Don’t forget to test case preservation. The shifted lettercase should follow the original lettercase. For example, caesarCipher('HeLLo', 3) should return 'KhOOr'.
// Don’t forget to test punctuation. Punctuations, spaces, and other non-alphabetical characters should remain unchanged. For example, caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'.
// For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

test("Check for chars", () => {
  expect(caesarCipher("a")).toBe("d");
});

test("Check for number", () => {
  expect(caesarCipher("7")).toBe("7");
});

test("Check for case", () => {
  expect(caesarCipher("A")).toBe("D");
});

test("Check for phrase", () => {
  expect(
    caesarCipher(
      "Hello, World! 123 - This is a test: @CaesarCipher? Let's see how far we can go."
    )
  ).toBe(
    "Khoor, Zruog! 123 - Wklv lv d whvw: @FdhvduFlskhu? Ohw'v vhh krz idu zh fdq jr."
  );
});

// test("Successfully implement caesar cipher with all edge cases", () => {
//   expect(
//     caesarCipher(
//       "Hello, World! 123 - This is a test: @CaesarCipher? Let's see how far we can go."
//     )
//   ).toBe(
//     "Khoor, Zruog! 123 - Wklv lv d whvw: @FdhvduFlskhu? Ohw'v vhh krz idu zh fdq jr."
//   );
// });

// 5. An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

// const object = analyzeArray([1,8,3,4,2,6]);

// object == {
//    average: 4,
//    min: 1,
//    max: 8,
//    length: 6
// };
