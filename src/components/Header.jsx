import React from "react";
import CartCount from "./CartCount";

function Header() {
  return (
    <div className="flex items-center justify-between h-20 bg-yellow-100">
      <div>Logo, Brand</div>
      <CartCount />
    </div>
  );
}

export default Header;
