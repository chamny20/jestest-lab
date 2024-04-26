export async function fetchData() {
  const response = await fetch("https://www.naver.com", {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);
}
