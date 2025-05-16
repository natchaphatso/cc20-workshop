import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductLists";
import CartSummary from "./components/CartSummery";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <ProductList />
        <CartSummary />
      </div>
    </div>
  );
}

export default App;
