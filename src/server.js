import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";

require("dotenv").config();

let app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // d34?

viewEngine(app);
initWebRoutes(app);

connectDB();

let PORT = process.env.PORT || 8080;
// PORT === undefined => port = 8080

app.listen(PORT, () => {
  console.log("Backend Nodejs is running on the port: " + port);
});
