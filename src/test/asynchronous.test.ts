import { fetchData } from "utils/asynchoronous";

test("the data is naver data", () => {
  return fetchData().then((data) => {
    expect(data).toBe("naver data");
  });
});

test("the data is naver data", async () => {
  const data = await fetchData();
  expect(data).toBe("naver data");
});

test("the fetch fails with an error", async () => {
  // 테스트가 실행되면서 1개의 어설션을 실행해야 한다.
  expect.assertions(1);
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch("error");
  }
});

test("the data is naver", async () => {
  await expect(fetchData()).resolves.toBe("naver data");
});

test("the fetch fails with an error", async () => {
  await expect(fetchData()).rejects.toMatch("error");
});
