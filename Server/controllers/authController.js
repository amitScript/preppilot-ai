import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
// ======================
// Signup Controller
// ======================
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// Login Controller
// ======================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Success Response
    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// Get Current User
// ======================
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ======================
// Upload Resume
// ======================




export const uploadResume = async (req, res) => {
  try {
    console.log("Database Name =", mongoose.connection.name);

    const users = await User.find();

    console.log("Total Users =", users.length);

    console.log(users);
    console.log("========== UPLOAD ==========");
    console.log("req.user =", req.user);
    console.log("req.file =", req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No resume uploaded",
      });
    }

    // Pehle check karte hain database me kya users hain
    const allUsers = await User.find().select("_id name email");

    console.log("All Users =", allUsers);

    // Ab jis id se search kar rahe hain
    const user = await User.findById(req.user);

    console.log("Found User =", user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.resume = req.file.path;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Resume uploaded successfully",
      resume: user.resume,
    });

  } catch (error) {
    console.log("UPLOAD ERROR =", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};