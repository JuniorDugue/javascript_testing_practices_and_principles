function sum(a, b) {
  return a + b;
}

test("sum adds numbers", () => {
  expect(sum(1, 3)).toBe(4);
});
