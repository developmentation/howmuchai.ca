const express = require("express");
const path = require("path");
const { app } = require("./config/app.js");

// In production, serve built files from public/dist
if (process.env.NODE_ENV === "PROD") {
  app.use(express.static(path.join(__dirname, "../public/dist")));
} 

// API routes (ensure these are defined first) - For consistency all endpoints start with /api/ or api/1.x/, api/2.x/ to enable API versioning and backward compatibility 
app.use("/api/configs", require("./routes/configs")); // Configuration values
app.use("/api/signup", require("./routes/signup")); // Process the sign up values

// SPA Fallback: Serve `index.html` for any non-API routes
app.get("*", (req, res) => {
  if (req.path.startsWith("/api")) {
    res.status(404).send({ error: "API route not found" });
  }
});

// 404 error handler for unrecognized routes
app.use((req, res, next) => {
  const error = new Error("This site was not found. Perhaps you want to call login?");
  error.status = 404;
  next(error);
});

