import { useEffect, useState } from "react";
import { getProducts } from "../services/store";

const StoreItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = getProducts();
    setProducts(products);
  }, []);

  console.log(products);
  return <div />;
};

export default StoreItems;
