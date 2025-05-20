const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [50, "Name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please provide a valid email address",
    ],
    unique: true, // Prevent duplicate emails
  },
  industry: {
    type: String,
    required: [true, "Industry is required"],
    // enum: {
    //   values: [
    //     "Private Sector",
    //     "Public Sector",
    //     "Post-Secondary",
    //     "Research",
    //     "Citizen",
    //   ],
    //   message: "Invalid industry value",
    // },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Handle duplicate email error
signupSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    next(new Error("Email already exists"));
  } else {
    next(error);
  }
});

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;