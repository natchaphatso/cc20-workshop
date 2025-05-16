import React from "react";
import CartCount from "./CartCount";

function Header(props) {
  const { itemCount } = props;
  return (
    <div className="flex items-center justify-between h-20 bg-purple-300 px-4">
      <div>Logo, Brand</div>
      <CartCount itemCount={itemCount} />
    </div>
  );
}

export default Header;
