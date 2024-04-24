import { add, minus } from "utils/sample";

it("add corretly", () => {
  expect(add({ a: 3, b: 5 })).toBe(8);
});

test("test minus calculator", () => {
  expect(minus({ a: 3, b: 5 })).toBe(-2);
});

// it("ENV Test", async () => {
//   const testApi = process.env.REACT_APP_TEST_API;
//   if (testApi) {
//     expect(testApi).toBe("https://jsonplaceholder.typicode.com/posts/1");
//   }
// });

// object의 값을 체크하고 싶을 경우에는 toEqual() 사용
test("object assignment", () => {
  const data: any = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// type checking
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// 정규표현식
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

// Array test
test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});
