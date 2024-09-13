import React from "react";

function Product({ product }) {
  console.log(product);

  function incrementQuantity(index) {

  }

  return (
    <div className="product-main">
      <div className="product-name-price">
        <span>{product.name} </span>
        <span> ${product.price}</span>
      </div>

      <div>
        <button className="btn-minus">-</button>
        <button>{product.quantity}</button>
        <button className="btn-plus" onClick={incrementQuantity()}>+</button>
      </div>
    </div>
  );
}

export default Product;
