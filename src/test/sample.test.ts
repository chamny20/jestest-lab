import { sam } from "utils/sample";

it("add corretly", () => {
  expect(sam({ a: 3, b: 5 })).toBe(8);
});

// it("ENV Test", async () => {
//   const testApi = process.env.REACT_APP_TEST_API;
//   if (testApi) {
//     expect(testApi).toBe("https://jsonplaceholder.typicode.com/posts/1");
//   }
// });
