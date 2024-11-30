import React, { useState } from "react";
import Footer from "./Footer";
import Rating from "react-rating-stars-component";
import "./Products.css";
import { Link } from "react-router-dom";
import { IoFilterSharp, IoSearchSharp } from "react-icons/io5";

function Products({
  products,
  cart,
  selectedCategory,
  handleAddToCart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({
    searchTerm: "",
    minPrice: "",
    maxPrice: "",
    minRating: 0,
  });

  const applyFilters = () => {
    setAppliedFilters({
      searchTerm,
      minPrice,
      maxPrice,
      minRating,
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.Category === selectedCategory
      : true;
    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(appliedFilters.searchTerm.toLowerCase()) ||
      product.Type.toLowerCase().includes(
        appliedFilters.searchTerm.toLowerCase()
      );
    const matchesMinPrice = appliedFilters.minPrice
      ? product.price >= parseFloat(appliedFilters.minPrice)
      : true;
    const matchesMaxPrice = appliedFilters.maxPrice
      ? product.price <= parseFloat(appliedFilters.maxPrice)
      : true;
    const matchesMinRating = product.rating >= appliedFilters.minRating;
    return (
      matchesCategory &&
      matchesSearch &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesMinRating
    );
  });

  return (
    <>
      <div className="container mt-5">
        <div className="mb-4">
          <div className="filter-container">
            <h5>Filter</h5>
            <IoFilterSharp
              className="FilterIcon"
              style={{ cursor: "pointer" }}
              onClick={() => setShowFilters(!showFilters)}
            />
          </div>
        </div>
        {showFilters && (
          <div className="row mb-4">
            <div className="col-md-3 mb-2">
              <div className="inputField">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="input-icon-container">
                  <IoSearchSharp
                    className="searchicon"
                    onClick={applyFilters}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-2 mb-2">
              <input
                type="number"
                className="form-control"
                placeholder="Min price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div className="col-md-2 mb-2">
              <input
                type="number"
                className="form-control"
                placeholder="Max price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <div className="col-md-3 mb-2 d-flex align-items-center">
              <Rating
                count={5}
                size={24}
                activeColor="#ffd700"
                value={minRating}
                onChange={(newRating) => setMinRating(newRating)}
                isHalf={true}
              />
              <span className="rating-number">{minRating}</span>
            </div>
            <div className="col-md-2">
              <button className="btn btnBackground" onClick={applyFilters}>
                Apply Filters
              </button>
            </div>
          </div>
        )}
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-md-3 mb-3" key={product.id}>
                <div className="card h-100">
                  <img
                    src={product.imageUrl}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body d-flex flex-column">
                    <div className="card-content flex-grow-1">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                    </div>
                    <div className="card-footer mt-auto">
                      <p className="card-Price">
                        <strong>₹{product.price}</strong>
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="rating-number">{product.rating}</div>
                        <Rating
                          value={product.rating}
                          count={5}
                          size={24}
                          isHalf={true}
                          edit={false}
                        />
                      </div>
                      {cart[product.id] ? (
                        <div className="quantity-controls mt-2">
                          <button
                            className="btn btnBackground"
                            onClick={() => handleDecreaseQuantity(product.id)}
                          >
                            -
                          </button>
                          <span className="quantity mx-2">
                            {cart[product.id]}
                          </span>
                          <button
                            className="btn btnBackground"
                            onClick={() => handleIncreaseQuantity(product.id)}
                          >
                            +
                          </button>
                          {cart[product.id] >= 5 && (
                            <p className="text-danger mt-2">
                              You can only buy up to 5 of this product.
                            </p>
                          )}
                        </div>
                      ) : (
                        <button
                          className="btn btnBackground mt-4"
                          onClick={() => handleAddToCart(product.id)}
                        >
                          Add To Cart
                        </button>
                      )}
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btnBackgroundMore mt-4 ms-3"
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
