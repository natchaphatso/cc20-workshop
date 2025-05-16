import React from "react";

function CartItem(props) {
  const {
    item: { id, title, price, quantity },
  } = props;

  return (
    <div className="flex justify-between items-center px-4">
      <p>{title.split(" ")[0] + title.split(" ")[1]}</p>
      <div className="flex items-center gap-4">
        <p className="border w-5 h-5 bg-emerald-100 flex justify-center items-center cursor-pointer">
          -
        </p>
        <p className="border w-5 h-5 bg-emerald-100 flex justify-center items-center cursor-pointer">
          +
        </p>
      </div>
      <p>
        {quantity} * ${price}
      </p>
    </div>
  );
}

export default CartItem;
