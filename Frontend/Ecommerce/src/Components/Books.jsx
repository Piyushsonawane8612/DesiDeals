import React from "react";
import Products from "./Products";

const Books = ({
  products,
  cart,
  handleAddToCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) => {
  const books = products.filter((product) => product.Category === "Books");

  return (
    <Products
      products={books}
      cart={cart}
      handleAddToCart={handleAddToCart}
      handleIncreaseQuantity={handleIncreaseQuantity}
      handleDecreaseQuantity={handleDecreaseQuantity}
    />
  );
};

export default Books;
