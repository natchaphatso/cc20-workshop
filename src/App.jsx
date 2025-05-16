import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductLists from "./components/ProductLists";
import CartSummary from "./components/CartSummery";

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  // cart = {id, price, title, quantity}

  const fetchProducts = () => {
    fetch("http://localhost:8000/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (id, title, price) => {
    let newItem = { id: id, title: title, price: price, quantity: 1 };
    setCarts([...carts, newItem]);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header itemCount={carts.length} />
      <div className="flex flex-1">
        <ProductLists products={products} addToCart={addToCart} />
        <CartSummary carts={carts} />
      </div>
    </div>
  );
}
export default App;
