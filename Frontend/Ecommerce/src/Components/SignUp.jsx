import React, { useState } from "react";
import "./signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import logo2 from "../assets/Images/logo2.png";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.cpassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/signup", {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
      });

      console.log(response.data);
      // Navigate to Sign In page on successful registration
      navigate("/Sign_in");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="sign_form">
          <div className="sign_header">
            <img src={logo2} alt="Deals desi" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <h1>Sign-Up</h1>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="form_data">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form_data">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form_data">
                <label htmlFor="cpassword">Enter Password Again</label>
                <input
                  type="password"
                  className="form-control"
                  name="cpassword"
                  id="cpassword"
                  value={formData.cpassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="signin_btn btn btn-primary w-100">
                Continue
              </button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/Sign_in">Sign in</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
