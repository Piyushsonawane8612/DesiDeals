import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import logo2 from "../assets/Images/logo2.png";

const Sign_in = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log(response.data);
      // Redirect to home page
      navigate("/");
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
            <form onSubmit={handleLogin}>
              <h1>Sign-In</h1>
              {error && <p className="text-danger">{error}</p>}
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="signin_btn btn btn-primary w-100"
              >
                Continue
              </button>
              <div className="signin_info">
                <p>Don't have an account?</p>
                <NavLink to="/SignUp">Sign Up</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      </>
  );
};

export default Sign_in;
