const express = require("express");

// database connection
const DbConnect = require("./databaseConnection");

// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

// routes
const UserRoute = require("./routes/user-route");
const BookRoute = require("./routes/book-route");

const app = express(); // initialize express

// database connection call
DbConnect();

const PORT = 4000; // port number

// add json middleware
app.use(express.json());
app.use("/users", UserRoute);
app.use("/books", BookRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: `Server is running on port ${PORT}`,
  });
});

app.get("*", (req, res) => {
  res.status(404).json({
    message: "This route does not exist",
  });
});

app.listen(4000, () => {
  console.log(`Server is running on port ${PORT}`);
});
