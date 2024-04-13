const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser'); // Corrected import
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Middleware setup
app.use(morgan('dev'));
app.use(bodyParser.json()); // Corrected usage
app.use(cookieParser());
app.use(cors());

// Routes setup
const petRoutes = require('./routes/petRoutes');
const authRoutes = require('./routes/authRoutes');
app.use(petRoutes);
app.use(authRoutes);

// Database connection
const connectDB = require('./db');
connectDB();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Test route
app.get('/', (req, res) => {
  res.send('hii!');
});
