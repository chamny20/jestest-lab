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
