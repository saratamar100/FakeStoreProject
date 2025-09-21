import { useEffect, useState } from "react";
import { getProducts } from "../services/store";

const StoreItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  console.log(products);
  return <div />;
};

export default StoreItems;
