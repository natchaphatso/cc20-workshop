import React from "react";
import CartItem from "./CartItem";

function CartSummery(props) {
  const { carts } = props;
  return (
    <div className="w-1/3 bg-emerald-200">
      <h2 className="text-2xl rounded py-2 px-4 font-bold">Cart Item :</h2>
      <div className="flex flex-col gap-2">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <pre>{JSON.stringify(carts, null, 2)}</pre>
    </div>
  );
}

export default CartSummery;
