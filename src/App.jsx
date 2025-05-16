import { useState, useEffect, cloneElement } from "react";
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
    let idx = carts.findIndex((elem) => elem.id === id); // not found = -1
    let newItem;
    if (idx === -1) {
      newItem = { id: id, title: title, price: price, quantity: 1 };
      setCarts([...carts, newItem]);
    } else {
      const clonedCart = [...carts];
      clonedCart[idx].quantity += 1;
      setCarts(clonedCart);
    }
  };

  const decQuantity = (id) => {
    //ลดจำนวน Quantity ของ Item ใน Cart
    let idx = carts.findIndex((elem) => elem.id === id); // not found = -1
    const clonedCart = [...carts];
    if (clonedCart[idx].quantity > 1) {
      clonedCart[idx].quantity -= 1;
    } else {
      clonedCart.splice(idx, 1);
    }
    setCarts(clonedCart);
  };

  const incQuantity = (id) => {
    //เพิ่มจำนวน Quantity ของ Item ใน Cart
    let idx = carts.findIndex((elem) => elem.id === id); // not found = -1
    const clonedCart = [...carts];
    if (clonedCart[idx].quantity >= 1) {
      clonedCart[idx].quantity += 1;
    }
    setCarts(clonedCart);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header itemCount={carts.length} />
      <div className="flex flex-1">
        <ProductLists products={products} addToCart={addToCart} />
        <CartSummary
          carts={carts}
          decQuantity={decQuantity}
          incQuantity={incQuantity}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}
export default App;
