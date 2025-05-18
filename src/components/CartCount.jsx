import React from "react";

function CartCount(props) {
  const { itemCount } = props;
  return (
    <div>
      <i class="fa-solid fa-cart-shopping text-2xl"> {itemCount} </i>
    </div>
  );
}

export default CartCount;
