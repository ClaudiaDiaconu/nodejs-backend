// import express from "express";
// import bodyParser from "body-parser";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const socialRoute = require("./routes/social");
const ordersRoute = require("./routes/order");

app.use("/", authRoute);
app.use("/users", usersRoute);
app.use("/", socialRoute);
app.use("/", ordersRoute);

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(`${error} not connect`));
