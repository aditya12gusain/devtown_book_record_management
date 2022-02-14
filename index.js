const express = require("express");
const app = express(); // initialize express
const PORT = 4000; // port number

// add json middleware
app.use(express.json());

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
