// A mock function to mimic making an async request for data
export async function fetchCount(amount = 1) {
  const response = await fetch("https://localhost:8080");
  const result = await response.json();
  return result;
}
