const express = require("express");
const serverless = require('serverless-http')
const app = express();
const port = 3000;

// Sample data
const products = [
  { id: 1, name: "venu", price: 1.5 },
  { id: 2, name: "verey", price: 0.5 },
  { id: 3, name: "aws", price: 1.0 },
];

// GET all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET product by ID
app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

// Start server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

module.exports.handler = serverless(app);
