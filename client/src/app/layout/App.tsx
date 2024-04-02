import { useEffect, useState } from "react";
import { Product } from "../models/products";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:7107/api/Products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function AddProduct() {
    setProducts((prevState) => [...prevState,
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1),
        price: (prevState.length * 100) + 100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'https://picsum.photos/200'
      }]);
  }

  return (
    <>
      <Typography variant='h2'>Enterprise Shopping</Typography>
      <Catalog products = {products} addProduct={AddProduct}/>
    </>
  );
}

export default App;
