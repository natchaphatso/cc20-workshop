import React from "react";

function CartItem(props) {
  const {
    incQuantity,
    decQuantity,
    item: { id, title, price, quantity },
  } = props;

  return (
    <div className="flex justify-between items-center px-4">
      <p>{title.split(" ")[0] + title.split(" ")[1]}</p>
      <div className="flex items-center gap-4">
        <button
          className="rounded-xs w-6 h-6 bg-pink-300 flex justify-center items-center cursor-pointer hover:bg-pink-400 hover:text-white"
          onClick={() => decQuantity(id)}
        >
          -
        </button>
        <button
          className="rounded-xs w-6 h-6 bg-pink-300 flex justify-center items-center cursor-pointer hover:bg-pink-400 hover:text-white"
          onClick={() => incQuantity(id)}
        >
          +
        </button>
      </div>
      <p>
        {quantity} x ${price}
      </p>
    </div>
  );
}

export default CartItem;
