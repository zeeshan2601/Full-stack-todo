require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.congig');

//config
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// importing routes
const authRoutes = require('./routes/auth.routes.js');


// Routes
app.use('/api/auth', authRoutes);





app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});




