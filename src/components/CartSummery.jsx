import React from "react";
import CartItem from "./CartItem";

function CartSummery(props) {
  const { carts, decQuantity, incQuantity } = props;
  const allSum = carts.reduce(
    (sum, carts) => sum + carts.price * carts.quantity,
    0
  );
  const vat = allSum * 0.18;
  const finalAllSum = allSum + vat;
  return (
    <div className="flex flex-col w-1/3 bg-purple-200">
      <h2 className="text-2xl rounded py-2 px-4 font-bold">Cart Item :</h2>
      <div className="flex flex-col gap-2 mb-4">
        {carts.map((elem) => (
          <CartItem
            key={elem.id}
            item={elem}
            decQuantity={decQuantity}
            incQuantity={incQuantity}
          />
        ))}
      </div>
      <hr />
      <div className="flex flex-col gap-2 mt-4">
        <p className="px-4">
          Total : <strong>${allSum.toFixed(2)}</strong>
        </p>
        <p className="px-4">
          VAT : <strong>${vat.toFixed(2)}</strong>
        </p>
        <p className="px-4">
          Total Summary : <strong>${finalAllSum.toFixed(2)}</strong>
        </p>
      </div>
      {/* <pre>{JSON.stringify(carts, null, 2)}</pre> */}
    </div>
  );
}

export default CartSummery;
