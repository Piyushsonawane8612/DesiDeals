import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import "./ContactUsForm.css";
import Footer from "./Footer";
import axios from "axios";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, email, issue, message } = formData;
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!issue) newErrors.issue = "Issue type is required";
    if (!message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/contact",
          formData
        );

        if (response.status === 201) {
          setSubmitted(true);
          resetForm();
        }
      } catch (error) {
        setErrors({ form: "an error occurred. please try again." });
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      issue: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="contact-message">
              <hr className="message-line" />
              <h3 className="font-weight-bold">
                Feel Free To Contact And
                <br />
                Reach Us For More Info !!
              </h3>
            </div>

            <div className="contact-info">
              <div className="info-section">
                <span className="icon-circle">
                  <FaLocationDot />
                </span>
                <div className="info-text">
                  <h5>Location Address</h5>
                  <p>44/1/3 KN Road, Berhampore, Kolkata</p>
                </div>
              </div>

              <div className="info-section">
                <span className="phone-icon icon-circle">
                  <BiSolidPhoneCall />
                </span>
                <div className="info-text">
                  <h5>Phone Number</h5>
                  <p>+91 12345 67890</p>
                </div>
              </div>

              <div className="info-section">
                <span className="icon-circle">
                  <HiOutlineMailOpen />
                </span>
                <div className="info-text">
                  <h5>Email Address</h5>
                  <p>contact@company.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="mb-4 contact-us-header">Contact Us</h2>
            {submitted && (
              <div className="alert alert-success">
                Form submitted successfully!
              </div>
            )}

            {errors.form && (
              <div className="alert alert-danger">{errors.form}</div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Type of Issue</label>
                <select
                  className={`form-control ${
                    errors.issueType ? "is-invalid" : ""
                  }`}
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                >
                  <option value="">Select an issue type</option>
                  <option value="Order Issue">Order Issue</option>
                  <option value="Product Issue">Product Issue</option>
                  <option value="Payment Issue">Payment Issue</option>
                  <option value="Shipping Issue">Shipping Issue</option>
                  <option value="Other">Other</option>
                </select>
                {errors.issue && (
                  <div className="invalid-feedback">{errors.issue}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Explain Your Issue</label>
                <textarea
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  rows={2}
                  placeholder="Describe your issue in detail"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

              <button type="submit" className="btn btnSubmit ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsForm;
