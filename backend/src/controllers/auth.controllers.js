const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExistsWithUsername = await User.findOne({ username });
    if (userExistsWithUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    
    if (newUser) {
      res
        .status(201)
        .json({
          success: true,
          message: "User created successfully",
          data : {
            username : username,
            email : email
          }
        });
        console.log(newUser);
    }
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

module.exports = { signUp };