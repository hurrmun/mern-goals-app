//* dependencies
const path = require("path");
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
app.use("/api/users", require("./routes/userRoutes.js"));

//* Serve frontend
if (procewss.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build"))); // __dirname = current directory

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  ); // point all routes (besides API routes) to index.html
}

//* error middleware
app.use(errorHandler);

//* app listener
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
