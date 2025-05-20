const Signup = require("../models/signup.js");

exports.signup = async function (req, res, next) {
  try {
    const { name, email, industry } = req.body;

    // Basic validation
    if (!name || !email || !industry) {
      return res.status(400).json({
        message: "All fields are required",
        payload: null,
      });
    }

    // Create a new signup entry
    const signup = new Signup({
      name,
      email,
      industry,
    });

    // Save to database
    await signup.save();

    // Respond with success
    res.status(201).json({
      message: "Signup successful",
      payload: {
        name: signup.name,
        email: signup.email,
        industry: signup.industry,
        createdAt: signup.createdAt,
      },
    });
  } catch (error) {
    // Handle validation errors or duplicate email
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        message: messages.join(", "),
        payload: null,
      });
    }
    if (error.message === "Email already exists") {
      return res.status(409).json({
        message: "Email already exists",
        payload: null,
      });
    }
    // Other errors
    console.error("Error in signup:", error.message);
    res.status(500).json({
      message: "Error processing signup",
      payload: null,
    });
  }
};