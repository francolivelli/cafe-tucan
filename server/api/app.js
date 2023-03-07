const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const morgan = require("morgan");
app.use(morgan("tiny"));

const models = require("./models");

const routes = require("./routes");
app.use("/api", routes);

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 3001;

const db = require("./database/db");

const connect = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Server is listening on port", PORT);
    });
    await db.sync({ force: false });
    console.log("Connection to the database has been established");
  } catch (error) {
    console.error("There was an error:", error);
  }
};

connect();
