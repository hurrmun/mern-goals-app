//* dependencies
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

//* configuration
const port = process.env.PORT || 3001;
connectDB();
const app = express();

//* middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//* routes middleware
app.use("/api/goals", require("./routes/goalRoutes.js"));

//* error middleware
app.use(errorHandler);

//* app listener
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
