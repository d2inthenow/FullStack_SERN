import express from "express";
import initWebRoutes from "./route/web";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import connectDB from "./config/connectDB";
require('dotenv').config();


const app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


configViewEngine(app);
initWebRoutes(app);

// connect to database
connectDB();
const port = process.env.PORT || 4444;
app.listen(port, () => {
    console.log("Backend Nodejs is running on port:" + port);
})