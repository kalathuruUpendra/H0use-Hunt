const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectionofDb = require("./config/connect.js");
const path = require("path");

const app = express();

//////dotenv config/////////////////////
dotenv.config();

//////connection to DB/////////////////
connectionofDb();


const PORT = process.env.PORT || 8001;


app.use(express.json());
const allowedOrigins = [
  'http://localhost:3000',
  'https://688c368f1d9c62ad63a9a6d5--househuntu.netlify.app'  // replace with your real Netlify URL
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin like mobile apps or curl requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS not allowed from this origin'));
    }
  },
  methods: ['GET', 'POST']
}));



app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api/user', require('./routes/userRoutes.js'))
app.use('/api/admin', require('./routes/adminRoutes'))
app.use('/api/owner', require('./routes/ownerRoutes'))



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
