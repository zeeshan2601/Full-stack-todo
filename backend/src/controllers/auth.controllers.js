const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// signup controller
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

// login controller
const login = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Find user by username or email
    const user = await User.findOne({
      $or: [{ username: username }, { email: email }]
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid username/email or password"
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid password"
      });
    }

    const token = jwt.sign({
      id : user._id,
      username : user.username,
      email : user.email
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data : {
        token : token
      }
    });

    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
}


module.exports = { signUp };