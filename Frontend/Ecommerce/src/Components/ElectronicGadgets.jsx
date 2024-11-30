import React from "react";
import Products from "./Products";

const ElectronicGadgets = ({
  products,
  cart,
  handleAddToCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) => {
  const electronicGadgets = products.filter(
    (product) => product.Category === "Electronic Gadget"
  );

  return (
    <Products
      products={electronicGadgets}
      cart={cart}
      handleAddToCart={handleAddToCart}
      handleIncreaseQuantity={handleIncreaseQuantity}
      handleDecreaseQuantity={handleDecreaseQuantity}
    />
  );
};

export default ElectronicGadgets;
