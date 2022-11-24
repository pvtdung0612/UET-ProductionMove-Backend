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

const PORT = process.env.PORT || 3864;
// PORT === undefined => port = 8080

// import bcrypt from "bcryptjs";

// const salt = bcrypt.genSaltSync(10);
// async function hashPassword(password) {
//   let result = await bcrypt.hashSync(password, salt);
//   console.log(result);
//   return result;
// }

// let aryPasswordDefault = [
//   hashPassword("dung"),
//   hashPassword("kha"),
//   hashPassword("quang"),
//   hashPassword("dungAgent"),
//   hashPassword("quangAgent"),
//   hashPassword("khaAgent"),
//   hashPassword("dungFactory"),
//   hashPassword("quangFactory"),
//   hashPassword("khaFactory"),
//   hashPassword("dungInsurance"),
//   hashPassword("quangInsurance"),
//   hashPassword("khaInsurance"),
// ];

app.listen(PORT, () => {
  console.log("Backend Nodejs is running on the port: " + PORT);
});
