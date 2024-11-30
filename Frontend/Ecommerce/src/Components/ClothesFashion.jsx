import React from "react";
import Products from "./Products";

const ClothesFashion = ({
  products,
  cart,
  handleAddToCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) => {
  const ClothesFashion = products.filter(
    (product) => product.Category === "Cloths"
  );

  return (
    <Products
      products={ClothesFashion}
      cart={cart}
      handleAddToCart={handleAddToCart}
      handleIncreaseQuantity={handleIncreaseQuantity}
      handleDecreaseQuantity={handleDecreaseQuantity}
    />
  );
};

export default ClothesFashion;
