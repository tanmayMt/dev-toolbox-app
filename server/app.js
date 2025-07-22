const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonRoutes = require("./routes/json.routes");
const base64Routes = require("./routes/base64.routes");
require("dotenv").config();

const app = express();
// app.use(cors());
app.use(bodyParser.json());

const corsOptions = {
  //origin: `http://localhost:3000`,
  origin: `https://dev-toolbox-beige.vercel.app`,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  credentials: true,
};
app.use(cors(corsOptions));


app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Dev Toolbox API</h1>");
});

app.use("/api/json", jsonRoutes);
app.use("/api/base64", base64Routes);

module.exports = app;
