require('dotenv').config() // load env file
const initialiseRoutes = require("./routes");
var cookieParser = require('cookie-parser')
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

async function initialise() {
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors({credentials: true, origin: process.env.BASE_URL}))


  initialiseRoutes(app);
  

  await mongoose // connecting to the database before API starts listening for calls
    .connect(process.env.MONGO_URL, {
      // connecting to database
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB"); // successful connection
      
    })
    .catch((err) => {
      // error connecting
      console.log("Error connecting to MongoDB", {
        error: err.message || null,
        stack: err.stack || null,
      });

      process.exit(1); // API does not start if there is an error connecting
    });

  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });
}

initialise();
