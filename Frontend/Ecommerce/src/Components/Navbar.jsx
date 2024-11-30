import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import logo1 from "../assets/Images/logo1.png";

function Navbar({ cart }) {
  const location = useLocation();
  const cartItemCount = Object.values(cart).reduce(
    (acc, count) => acc + count,
    0
  );

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-bg sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo1} alt="Logo" className="logo" />
          </Link>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={getNavLinkClass("/")}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={getNavLinkClass("/AboutUs")} to="/AboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={getNavLinkClass("/ContactUsForm")}
                  to="/ContactUsForm"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="container-icons d-flex pe-lg-5">
            <form className="d-flex search-form me-auto">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <span className="input-group-text search-icon">
                  <FaSearch />
                </span>
              </div>
            </form>

            <div>
              <Link to="/Sign_in">
                <FaRegUser className="cartIcon me-3 ms-3" />
              </Link>
            </div>
            <div className="position-relative">
              <Link to="/Cart">
                <HiOutlineShoppingCart className="cartIcon" />
                {cartItemCount > 0 && (
                  <span className="position-absolute translate-middle badge rounded-pill bgCart">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
