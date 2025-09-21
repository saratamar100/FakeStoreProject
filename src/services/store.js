import { loadFromStorage, saveToStorage } from "../utils/localStorage";

export async  function getProducts() {
  const products = loadFromStorage("products");
  if (products !== null) {
    return Promise.resolve(products);
  }
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  saveToStorage("products", data);
  return data;
}
