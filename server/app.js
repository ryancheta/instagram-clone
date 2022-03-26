const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const productRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");
const postRoutes = require('./api/routes/post');
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  `mongodb+srv://ryancheta:${process.env.MONGO_ATLAS_PASSWORD}@nodejs-backend.515yy.mongodb.net/<nodejs-backend>?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
);
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());

/**
 * CORS Handling
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization",
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use('/post', postRoutes)

/**
 * ERROR HANDLING START
 */
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

/**
 * ERROR HANDLING END
 */
module.exports = app;
