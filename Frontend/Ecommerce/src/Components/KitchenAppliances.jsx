import React from "react";
import Products from "./Products";

const KitchenAppliances = ({
  products,
  cart,
  handleAddToCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) => {
  const kitchenAppliances = products.filter(
    (product) => product.Category === "Home Appliances"
  );

  return (
    <Products
      products={kitchenAppliances}
      cart={cart}
      handleAddToCart={handleAddToCart}
      handleIncreaseQuantity={handleIncreaseQuantity}
      handleDecreaseQuantity={handleDecreaseQuantity}
    />
  );
};

export default KitchenAppliances;
