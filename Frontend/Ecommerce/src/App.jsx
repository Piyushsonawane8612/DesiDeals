import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Service from "./Components/Service";
import AboutUs from "./Components/AboutUs";
import Privacy from "./Components/Privacy";
import CancelationAndReturn from "./Components/CancelationAndReturn";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import SingleProduct from "./Components/SingleProduct";
import Checkout from "./Components/Checkout";
import ElectronicGadgets from "./Components/ElectronicGadgets";
import KitchenAppliances from "./Components/KitchenAppliances";
import ClothesFashion from "./Components/ClothesFashion";
import Books from "./Components/Books";
import ContactUsForm from "./Components/ContactUsForm";
import SignUp from "./Components/SignUp";
import Sign_in from "./Components/Sign_in";

function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch products from backend on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToCart = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: 1,
    }));
  };

  const handleIncreaseQuantity = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: Math.min(prevCart[productId] + 1, 5),
    }));
  };

  const handleDecreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const newQuantity = prevCart[productId] - 1;
      if (newQuantity <= 0) {
        const { [productId]: _, ...rest } = prevCart;
        return rest;
      }
      return {
        ...prevCart,
        [productId]: newQuantity,
      };
    });
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/ContactUsForm" element={<ContactUsForm />} />
        <Route path="/Sign_in" element={<Sign_in />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route
          path="/Products"
          element={
            <Products
              products={products}
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          }
        />
        <Route
          path="/Cart"
          element={
            <Cart
              products={products}
              cart={cart}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          }
        />
        <Route
          path="/product/:productId"
          element={
            <SingleProduct
              products={products}
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          }
        />
        <Route
          path="/CancelationAndReturn"
          element={<CancelationAndReturn />}
        />
        <Route path="/Checkout" element={<Checkout />} />
        <Route
          path="/electronic-gadgets"
          element={
            <ElectronicGadgets
              products={products}
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          }
        />
        <Route
          path="/kitchen-appliances"
          element={
            <KitchenAppliances
              products={products}
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          }
        />
        <Route
          path="/Clothes"
          element={
            <ClothesFashion
              products={products}
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          }
        />
        <Route
          path="/books"
          element={
            <Books
              products={products}
              cart={cart}
              handleAddToCart={handleAddToCart}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
