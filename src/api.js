import handleError from "./errorHandler";

export default async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    handleError('fetchData', error);
  }
}