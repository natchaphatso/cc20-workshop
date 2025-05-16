import React from "react";
import CartItem from "./CartItem";

function CartSummery() {
  return (
    <div className="w-1/3 bg-blue-200">
      <h2>Cart Item :</h2>
      <CartItem />
    </div>
  );
}

export default CartSummery;
