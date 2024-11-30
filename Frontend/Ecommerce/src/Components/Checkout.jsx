import React, { useState } from "react";
import "./Checkout.css";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const { items } = location.state || { items: [] };

  const totalItemsCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [step, setStep] = useState("billing");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    townCity: "",
    phone: "",
    email: "",
    pinCode: "",
  });

  const handleBillingSubmit = (e) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing logic here
    if (paymentMethod === "") {
      alert("Please select a payment method.");
      return;
    }
    if (paymentMethod === "Card") {
      if (!validateCardDetails()) {
        alert("Please fill in all card details.");
        return;
      }
    }
    alert(`Your Order is Confirm via ${paymentMethod}!`);
    // Optionally, navigate to a confirmation page or perform further actions
  };

  const handleBack = () => {
    setStep("billing");
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCardDetailsChange = (e) => {
    const { id, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [id]: value,
    });
  };

  const handleBillingDetailsChange = (e) => {
    const { id, value } = e.target;
    setBillingDetails({
      ...billingDetails,
      [id]: value,
    });
  };

  const validateCardDetails = () => {
    return (
      cardDetails.cardNumber !== "" &&
      cardDetails.expiryDate !== "" &&
      cardDetails.cvv !== ""
    );
  };

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case "Cash on Delivery":
        return (
          <>
            <h5 className="py-4">Cash on Delivery</h5>
            <form onSubmit={handlePaymentSubmit}>
              {/* Additional fields for Cash on Delivery */}
              <button type="submit" className="btn btnNext">
                Confirm Order
              </button>
            </form>
          </>
        );
      case "Card":
        return (
          <>
            <h5 className="py-4">Card Payment</h5>
            <form onSubmit={handlePaymentSubmit}>
              {/* Card Payment Form */}
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">
                  Card Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange}
                  required
                />
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="expiryDate" className="form-label">
                    Expiry Date <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleCardDetailsChange}
                    required
                  />
                </div>
                <div className="col mb-3">
                  <label htmlFor="cvv" className="form-label">
                    CVV <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardDetailsChange}
                    required
                  />
                </div>
              </div>
              {/* Add more fields for card payment */}
              <button type="submit" className="btn btnNext">
                Pay Now
              </button>
            </form>
          </>
        );
      case "UPI":
        return (
          <>
            <h5>UPI Payment</h5>
            <form className="py-4" onSubmit={handlePaymentSubmit}>
              {/* UPI Payment Form */}
              <div className="mb-3">
                <label htmlFor="upiId" className="form-label">
                  UPI ID <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="upiId"
                  required
                />
              </div>
              {/* Add more fields for UPI payment */}
              <button type="submit" className="btn btnNext">
                Pay Now
              </button>
            </form>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Left side for Order Summary */}
          <div className="col-lg-8 col-md-7">
            <div className="RightSideBackground py-lg-3 p-3 px-lg-5 rounded">
              {step === "billing" && (
                <>
                  <h1 className="HeadlingCheckOut">Billing Details</h1>
                  <form className="pt-5" onSubmit={handleBillingSubmit}>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={billingDetails.firstName}
                        onChange={handleBillingDetailsChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastName" className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={billingDetails.lastName}
                        onChange={handleBillingDetailsChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">
                        Country <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        value={billingDetails.country}
                        onChange={handleBillingDetailsChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="streetAddress" className="form-label">
                        Street Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="streetAddress"
                        value={billingDetails.streetAddress}
                        onChange={handleBillingDetailsChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="townCity" className="form-label">
                        Town / City <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="townCity"
                        value={billingDetails.townCity}
                        onChange={handleBillingDetailsChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={billingDetails.phone}
                        onChange={handleBillingDetailsChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={billingDetails.email}
                        onChange={handleBillingDetailsChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pinCode" className="form-label">
                        Pin Code <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="pinCode"
                        value={billingDetails.pinCode}
                        onChange={handleBillingDetailsChange}
                        required
                      />
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btnNext">
                        Next
                      </button>
                    </div>
                  </form>
                </>
              )}
              {step === "payment" && (
                <>
                  <div className="mb-3">
                    <label className="form-label">
                      <h1 className="HeadlingCheckOut">Payment Methods :</h1>
                    </label>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="cashOnDelivery"
                        name="paymentMethod"
                        value="Cash on Delivery"
                        onChange={() =>
                          handlePaymentMethodChange("Cash on Delivery")
                        }
                        checked={paymentMethod === "Cash on Delivery"}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cashOnDelivery"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="card"
                        name="paymentMethod"
                        value="Card"
                        onChange={() => handlePaymentMethodChange("Card")}
                        checked={paymentMethod === "Card"}
                      />
                      <label className="form-check-label" htmlFor="card">
                        Card
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="upi"
                        name="paymentMethod"
                        value="UPI"
                        onChange={() => handlePaymentMethodChange("UPI")}
                        checked={paymentMethod === "UPI"}
                      />
                      <label className="form-check-label" htmlFor="upi">
                        UPI
                      </label>
                    </div>
                  </div>
                  {paymentMethod !== "" && renderPaymentForm()}
                  <div className="button-container">
                    <button className="btn btnBack" onClick={handleBack}>
                      Back
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right side for Payment Summary */}
          <div className="col-lg-4 col-md-5 mt-lg-0 mt-5">
            <div className="RightSideBackground py-lg-3 p-3 px-lg-5 rounded">
              <h1 className="HeadlingCheckOut">Your Order</h1>
              <table className="table no-bottom-border">
                <thead>
                  <tr>
                    <th className="tableHeadlineCheckOut" scope="col">
                      Product
                    </th>
                    <th className="tableHeadlineCheckOut" scope="col">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td className="tdBuy">
                        {item.name} × {item.quantity}
                      </td>
                      <td className="tdBuy">
                        ₹ {(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="tdBuy TotalText">SubTotal</td>
                    <td className="tdBuy TotalText">
                      ₹ {totalPrice.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td className="tdBuy">Delivery</td>
                    <td className="tdBuy">Free</td>
                  </tr>
                  <tr className="total">
                    <td className="tdBuy TotalText">Total Cost</td>
                    <td className="tdBuy TotalText">
                      ₹ {totalPrice.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
