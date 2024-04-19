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
