import React, { useState } from "react";

function ProductCard(props) {
  const [showDesc, setShowDesc] = useState(false);
  const {
    addToCart,
    productItem: { id, category, description, title, image, price, rating },
  } = props;
  return (
    <div className="card bg-base-100 w-96 shadow-sm pt-5">
      <figure className="h-40">
        <img className="h-full w-full object-contain" src={image} alt={title} />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="font-semibold">{category}</p>
        <p className={showDesc ? "" : "line-clamp-2"}>{description}</p>
        <p className="text-2xl">
          <strong>${price}</strong>
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-soft btn-primary"
            onClick={() => addToCart(id, title, price)}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setShowDesc((prv) => !prv)}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
