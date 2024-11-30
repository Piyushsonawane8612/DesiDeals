import React from "react";
import "./CancelationAndReturn.css";
import Footer from "./Footer";

function CancelationAndReturn() {
  return (
    <div>
      <div className="backgroundImgContainerReturn">
        <div className="cum">
          <h1 style={{ color: "#fff" }}>Cancellation & Return Policy</h1>
        </div>
      </div>
      <div className="contentContainer">
        <section className="introduction">
          <h2>Introduction</h2>
          <p>
            Welcome to our Cancellation and Return Policy page. Here you will
            find all the information you need regarding our policies for
            cancellations and returns.
          </p>
          <img
            src="https://thumbs.dreamstime.com/b/word-writing-text-return-policy-business-concept-tax-reimbursement-retail-terms-conditions-purchase-male-human-wear-160988702.jpg"
            alt="Introduction"
            className="sectionImage"
          />
        </section>
        <section className="cancellationPolicy">
          <h2>Cancellation Policy</h2>
          <p>
            Our cancellation policy allows you to cancel your order within 24
            hours of purchase. If you need to cancel your order, please contact
            our customer service team.
          </p>
        </section>
        <section className="returnPolicy">
          <h2>Return Policy</h2>
          <p>
            We accept returns within 30 days of purchase. The product must be
            unused and in its original packaging. To initiate a return, please
            follow the steps below.
          </p>
          <ol>
            <li>Contact our customer service team to request a return.</li>
            <li>Pack the product securely and include the original receipt.</li>
            <li>Ship the product to our return address.</li>
            <li>We will process your return within 7-10 business days.</li>
          </ol>
        </section>
        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <h3>What is your return policy?</h3>
          <p>
            You can return products within 30 days of purchase, provided they
            are unused and in original packaging.
          </p>
          <h3>How do I cancel my order?</h3>
          <p>
            To cancel your order, please contact our customer service team
            within 24 hours of purchase.
          </p>
        </section>
        <section className="contactInfo">
          <h2>Contact Information</h2>
          <p>
            If you have any questions or need assistance, please contact our
            customer service team at support@example.com or call us at (123)
            456-7890.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default CancelationAndReturn;
