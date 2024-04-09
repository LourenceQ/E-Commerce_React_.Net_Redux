import { Product } from "../../app/models/products";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";


export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:7107/api/Products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])
   
  return (
    <>
      <h1>Catalog</h1>
      <ProductList products={products} />
    </>
  );
}
