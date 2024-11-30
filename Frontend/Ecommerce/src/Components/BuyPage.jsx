import React from "react";
import "./BuyPage.css";
import { Link, useNavigate } from "react-router-dom";

function BuyPage({ items, total, handleBack }) {
  const navigate = useNavigate();

  // Calculate total count of all items
  const totalItemsCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    navigate("/Checkout", { state: { items } });
  };

  return (
    <div className="BuyBackground">
      <div className="lg-container xs-container-fluid">
        <div className="row justify-content-around">
          {/* Left side for item details */}
          <div className="col-md-6 p-lg-3 p-3 rightSideBackground">
            <div className="item-box">
              <div className="table-responsive">
                <table className="table no-bottom-border">
                  <thead>
                    <tr>
                      <th className="tableHeadlineBuy"></th>
                      <th className="tableHeadlineBuy">Product Details</th>
                      <th className="tableHeadlineBuy">Price</th>
                      <th className="tableHeadlineBuy">Quantity</th>
                      <th className="tableHeadlineBuy">Sub Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="tdBuy">
                          <div className="BuyImage">
                            <img
                              src={item.imageUrl}
                              className="img-fluid"
                              alt={item.name}
                            />
                          </div>
                        </td>
                        <td className="tdBuy">
                          <span>{item.name}</span>
                        </td>
                        <td className="tdBuy">₹{item.price}</td>
                        <td className="tdBuy">{item.quantity}</td>
                        <td className="tdBuy">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </td>{" "}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Back to Cart button */}
              <button className="btn btnBack mt-3" onClick={handleBack}>
                Back to Cart
              </button>
            </div>
          </div>

          {/* Right side for purchase summary and form */}
          <div className="col-md-4">
            <div className="leftSideBackground">
              <div className="text-center">
                <h3 className="p-2 text-secondary">Price Details</h3>
                <hr className="my-0" />
                <p className="text-success">
                  Your order is eligible for free Delivery
                </p>
              </div>

              <div className="px-3">
                <div className="d-flex justify-content-between">
                  <p>
                    <strong>Price ({totalItemsCount} items):</strong>
                  </p>
                  <p>
                    <strong>₹{total.toFixed(2)}</strong>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>
                    <strong>Delivery Charges:</strong>
                  </p>
                  <p>
                    <strong className="text-success">Free</strong>
                  </p>
                </div>
                <hr className="DotedLine" />
                <div className="d-flex justify-content-between">
                  <h5>Total Amount:</h5>
                  <h5>₹{total.toFixed(2)}</h5>
                </div>
                <button
                  className="btn btnPurches mt-3"
                  onClick={handleProceedToCheckout}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyPage;
