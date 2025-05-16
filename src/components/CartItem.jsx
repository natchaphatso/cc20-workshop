import React from "react";

function CartItem() {
  return (
    <div className="flex justify-between px-4">
      <p>Shoes</p>
      <div className="flex items-center gap-4">
        <p className="border w-5 h-5 bg-emerald-100 flex justify-center items-center cursor-pointer">
          -
        </p>
        <p className="border w-5 h-5 bg-emerald-100 flex justify-center items-center cursor-pointer">
          +
        </p>
      </div>
      <p>1 * $1000</p>
    </div>
  );
}

export default CartItem;
