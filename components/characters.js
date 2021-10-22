export async function fetchData(url) {
  const response = await fetch(url);
  const body = await response.json();
  return body.results;
}
