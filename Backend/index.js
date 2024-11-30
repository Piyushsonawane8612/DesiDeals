// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./Model/products");
const ContactForm = require("./Model/ContactForm");
const User = require("./Model/User");

const PORT = 5000;
require("dotenv").config();
require("./db");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is Ecommerce Website Backend is live");
});

// Get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add new product(s)
app.post("/products", async (req, res) => {
  try {
    const products = req.body;
    if (Array.isArray(products)) {
      // Handle array of products
      const savedProducts = await Product.insertMany(products);
      res.status(201).json(savedProducts);
    } else {
      // Handle single product
      const newProduct = new Product(products);
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Handle contact form submission
app.post("/contact", async (req, res) => {
  try {
    const contactForm = new ContactForm(req.body);
    const savedForm = await contactForm.save();
    res.status(201).json(savedForm);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// User Sign-Up
app.post("/signup", async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    // Check if email or mobile already exists
    const existingUser = await User.findOne({ $or: [{ email }, { mobile }] });
    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ error: "Email already exists" });
      }
      if (existingUser.mobile === mobile) {
        return res.status(400).json({ error: "Mobile number already exists" });
      }
    }

    const newUser = new User({ name, email, mobile, password });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// User Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Compare password (plain text comparison)
    if (password !== user.password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Send response
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
