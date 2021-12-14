const numbers = require("./numbers");

test("The function must return a string", () => {
  expect(typeof numbers("123")).toBe("string");
});
test("'123' must remain unchanged", () => {
  expect(numbers("123")).toBe("123");
});
test("'123456' must be '123 456' (one space between 3 and 4)", () => {
  expect(numbers("123456")).toBe("123 456");
});
test("'12345678' must be '12 345 678' (spaces in good places)", () => {
  expect(numbers("12345678")).toBe("12 345 678");
});

// LEVEL 2
// numbers('123,45') => '123,45'
// numbers('123456,78') => '123 456,78'
// numbers('1,23456') => '1,23456'
// test("'123,45' must remain unchanged (now with comas)", () => {
//   expect(numbers("123,45")).toBe("123,45");
// });
// test("'123456,78' must be '123 456,78'", () => {
//   expect(numbers("123456,78")).toBe("123 456,78");
// });
// test("'1,23456' must remain unchanged (no spaces after comas)", () => {
//   expect(numbers("1,23456")).toBe("1,23456");
// });
// test("'12345,6789' must be '12 345,6789'", () => {
//   expect(numbers("12345,6789")).toBe("12 345,6789");
// });

// LEVEL 3
// numbers('-123') => '-123'
// numbers('-12345') => '-12 345'
// numbers('-12345,6789') => '-12 345,6789'
// test("'-123' must remain unchanged (negative number)", () => {
//   expect(numbers("-123")).toBe("-123");
// });
// test("'-12345' must be '-12 345' (negative number with spaces)", () => {
//   expect(numbers("-12345")).toBe("-12 345");
// });
// test("'-12345,6789' must be '-12 345,6789' (you can do it!)", () => {
//   expect(numbers("-12345,6789")).toBe("-12 345,6789");
// });
