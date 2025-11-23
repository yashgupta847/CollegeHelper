const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const flash = require("connect-flash");
const session = require("express-session");

app.use(
  session({
    secret: "iet-secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(flash());

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.use(cors());
app.use(express.json());

// Only this ONE route file (it contains questions + answers)
const questionRoutes = require("./routes/MyQuestion");

// Register it
app.use("/api", questionRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// DB connect
mongoose
  .connect(
    "mongodb+srv://yashgupta5046:ietlko123@query.qihw2g1.mongodb.net/?appName=Query"
  )
  .then(() => {
    console.log("MongoDB Connected");

    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => console.log(err));
