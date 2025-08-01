const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectionofDb = require("./config/connect.js");
const path = require("path");

const app = express();

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectionofDb();

// Set the port
const PORT = process.env.PORT || 8001;

// Middleware to parse JSON
app.use(express.json());

// ✅ Allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://h0usehunt.netlify.app' // ✅ Correct Netlify domain
];

// ✅ CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS not allowed from this origin'));
    }
  },
  credentials: true, // ✅ Required if using cookies or authentication headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

// ✅ Handle preflight requests
app.options('*', cors());

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use('/api/user', require('./routes/userRoutes.js'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/owner', require('./routes/ownerRoutes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
