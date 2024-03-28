import { useEffect, useState } from "react";

const products = [
  { name: "product1", price: 100.0 },
  { name: "product2", price: 200.0 },
];

function App() {
  const [products, setProducts] = useState([
    { name: "product1", price: 100.0 },
    { name: "product2", price: 200.0 },
  ]);

  useEffect(() => {
    fetch('https://localhost:7107/api/Products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function AddProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        name: "product" + (prevState.length + 1),
        price: prevState.length * 1000 + 100,
      },
    ]);
  }

  return (
    <div>
      <h1>Enterprise Shopping</h1>
      <ul>
        {products.map((x, index) => (
          <li key={index}>
            {x.name} - {x.price}
          </li>
        ))}
      </ul>
      <button onClick={AddProduct}>Add product</button>
    </div>
  );
}

export default App;
