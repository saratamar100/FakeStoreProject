import { loadFromStorage, saveToStorage } from "../utils/localStorage";

export function getProducts() {
  const products = loadFromStorage("products");
  if (products !== null) {
    return Promise.resolve(products);
  }

  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      saveToStorage("products", data);
      return data;
    });
}
