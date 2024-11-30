import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BuyPage from "./BuyPage";
import "./SingleProduct.css";
import Rating from "react-rating-stars-component";
import Footer from "./Footer";

function SingleProduct({
  products,
  cart,
  handleAddToCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) {
  const { productId } = useParams();
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  const [selectedItems, setSelectedItems] = useState();
  const [message, setMessage] = useState("");

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleBuy = (item, total) => {
    if (!cart[item.id]) {
      setMessage("Please add the product to the cart first.");
      return;
    }
    setSelectedItems({ items: [{ ...item, quantity: cart[item.id] }], total });
  };

  const handleAddToCartWithMessageReset = (productId) => {
    handleAddToCart(productId);
    setMessage("");
  };

  return (
    <div>
      <div className="container pt-5">
        {selectedItems ? (
          <BuyPage
            items={selectedItems.items}
            total={selectedItems.total}
            handleBack={() => setSelectedItems()}
          />
        ) : (
          <div className="row justify-content-evenly">
            <div className="col-md-4">
              <div>
                <img
                  src={product.imageUrl}
                  className="singleProductImg"
                  alt={product.name}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1>{product.name}</h1>
              <h5>{product.description}</h5>
              <h4>₹{product.price}</h4>
              <p>
                <div className="d-flex align-items-center">
                  <div className="rating-number">{product.rating}</div>
                  <Rating
                    value={product.rating}
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    isHalf={true}
                    edit={false}
                  />
                </div>
              </p>
              <div className="single-product-buttons">
                {cart[product.id] ? (
                  <>
                    <div className="quantity-controls mt-2">
                      <button
                        className="btn btnBackground"
                        onClick={() => handleDecreaseQuantity(product.id)}
                      >
                        -
                      </button>
                      <span className="quantity mx-2">{cart[product.id]}</span>
                      <button
                        className="btn btnBackground"
                        onClick={() => handleIncreaseQuantity(product.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn btnCart ms-4"
                      onClick={() =>
                        handleBuy(product, product.price * cart[product.id])
                      }
                    >
                      Place Order
                    </button>
                    {cart[product.id] >= 5 && (
                      <p className="text-danger mt-2">
                        You can only buy up to 5 of this product.
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <button
                      className="btn singleButton "
                      onClick={() =>
                        handleAddToCartWithMessageReset(product.id)
                      }
                    >
                      Add To Cart
                    </button>
                    <button
                      className="btn singleButton ms-4"
                      onClick={() => handleBuy(product, product.price)}
                    >
                      Place Order
                    </button>
                  </>
                )}
              </div>
              {message && <p className="message">{message}</p>}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
