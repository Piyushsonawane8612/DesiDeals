import React from "react";
import { BsBootstrapReboot } from "react-icons/bs";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { MdPayment, MdOutlineSupportAgent } from "react-icons/md";
import "./Commitment.css";

function Commitment() {
  return (
    <div className="container">
      <h2 className="text-center pb-3">Our Commitment</h2>
      <hr />

      <div className="row px-5">
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="icon-container">
            <LiaTruckMovingSolid className="icon" />
            <h4>Free Shipping</h4>
            <p>Free shipping on order over 100$</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="icon-container">
            <MdPayment className="icon" />
            <h4>Secure Payment</h4>
            <p>We ensure secure payment with PEV</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="icon-container">
            <MdOutlineSupportAgent className="icon" />
            <h4>Support 24/7</h4>
            <p>Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="icon-container">
            <BsBootstrapReboot className="icon" />
            <h4>30 Days Return</h4>
            <p>Simply return it within 7-10 days for an exchange.</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Commitment;
