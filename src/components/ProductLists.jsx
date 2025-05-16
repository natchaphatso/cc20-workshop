import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductLists(props) {
  const { products, addToCart } = props;
  return (
    <div className="w-2/3 bg-pink-100">
      <h2 className="text-2xl rounded py-2 px-4 font-bold">Product List</h2>
      <div className="flex flex-wrap gap-4 ps-4 ">
        {products.map((elem) => (
          <ProductCard key={elem.id} productItem={elem} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductLists;
