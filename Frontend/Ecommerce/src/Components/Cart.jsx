import React, { useState } from "react";
import "./Cart.css";
import BuyPage from "./BuyPage";
import Footer from "./Footer";

function Cart({
  products,
  cart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) {
  const [selectedItems, setSelectedItems] = useState();

  const cartItems = Object.keys(cart).map((productId) => ({
    ...products.find((product) => product.id === parseInt(productId)),
    quantity: cart[productId],
  }));

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleBuy = (items, total) => {
    setSelectedItems({ items, total });
  };

  return (
    <div>
      <div className="container mt-5">
        {selectedItems ? (
          <BuyPage
            items={selectedItems.items}
            total={selectedItems.total}
            handleBack={() => setSelectedItems()}
          />
        ) : (
          <>
            <h1 className="text-center">Your Cart</h1>
            {cartItems.length > 0 ? (
              <div className="row">
                {cartItems.map((item) => (
                  <div className="col-md-4 mb-3" key={item.id}>
                    <div className="card h-100">
                      <img
                        src={item.imageUrl}
                        className="card-img-top"
                        alt={item.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          <strong>Price: ₹{item.price}</strong>
                        </p>
                        <div className="quantity-controls mt-2">
                          <button
                            className="btn btnBackground"
                            onClick={() => handleDecreaseQuantity(item.id)}
                          >
                            -
                          </button>
                          <span className="quantity mx-2">{item.quantity}</span>
                          <button
                            className="btn btnBackground"
                            onClick={() => handleIncreaseQuantity(item.id)}
                          >
                            +
                          </button>
                          <button
                            className="btn btnCart ms-4  mt-lg-0 mt-3"
                            onClick={() =>
                              handleBuy([item], item.price * item.quantity)
                            }
                          >
                            Place Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
            {cartItems.length > 0 && (
              <div className="mt-4 align-items-center text-center">
                <h4>Total Price: ₹{totalPrice.toFixed(2)}</h4>
                <button
                  className="btn btnCart"
                  onClick={() => handleBuy(cartItems, totalPrice)}
                >
                  Place Order
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
