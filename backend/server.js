const express = require("express");
const bodyParser = require("body-parser");
const middleware = require("./middleware.js");
var cors = require('cors')
var app = express()
app.use(cors())
const port = 3005;
const createUserRoute = require("./Route/User/createUserRoute");
const signinUserRoute = require("./Route/User/signinUserRoute");
const userTableRoute = require("./Route/User/userTableRoute");
const deleteUserRoute = require("./Route/User/deleteUserRoute");
const mailUserRoute = require("./Route/User/mailUserRoute");
const smsUserRoute = require("./Route/User/smsUserRoute");
const otpRoute = require("./Route/otpRoute")
const verifyOtpRoute = require("./Route/verifyOtpRoute");
const changePassRoute = require("./Route/changePassRoute");
const getUserRoute = require("./Route/User/getUserRoute.js");
const sendMailRoute = require("./Route/sendMailRoute");
const resetPassRoute = require("./Route/resetPassRoute");
const checkLinkRoute = require("./Route/checkLinkRoute");
const printExcelRoute = require("./Route/printExcelRoute")
const excelRoute = require("./Route/excelRoute");
const pageRoute = require("./Route/pageRoute");
const registerUserRoute = require("./Route/User/registerUserRoute");
const getRegisterRoute = require("./Route/getRegisterRoute");
const acceptUserRoute = require("./Route/User/acceptUserRoute");
const rejectUserRoute = require("./Route/User/rejectUserRoute")
const watchListRoute = require("./Route/watchListRoute");
const checkListRoute = require("./Route/checkListRoute");
const favoriteRoute = require("./Route/favoriteRoute");
const getWatchListRoute = require("./Route/getWatchListRoute");
const getFavoritesRoute = require("./Route/getFavoritesRoute");
const watchedRoute = require("./Route/watchedRoute");
const getWatchedRoute =require("./Route/getWatchedRoute");
const createPlayListRoute =require("./Route/createPlayListRoute");
const getPlayListRoute = require("./Route/getPlayListRoute");
const getListRoute = require("./Route/getListRoute");
const addToPlayListRoute =require("./Route/addToPlayListRoute");


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
  );
  next();
});
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.use("/createUser", createUserRoute);
app.use("/signinUser",signinUserRoute);
app.use("/userTable",middleware.checkToken,userTableRoute);
app.use("/deleteUser",middleware.checkToken,deleteUserRoute);
app.use("/mailUser",mailUserRoute);
app.use("/smsUser",smsUserRoute);
app.use("/otp",otpRoute);
app.use("/verifyOtp",verifyOtpRoute);
app.use("/changePassword",changePassRoute);
app.use("/getUser",getUserRoute);
app.use("/sendMail",sendMailRoute);
app.use("/resetPassword",resetPassRoute);
app.use("/checkLink",checkLinkRoute);
app.use("/printExcel",printExcelRoute);
app.use("/excel",excelRoute);
app.use("/page",pageRoute);
app.use("/registerUser",registerUserRoute);
app.use("/getRegister",getRegisterRoute);
app.use("/acceptUser",acceptUserRoute);
app.use("/rejectUser",rejectUserRoute);
app.use("/watchList",watchListRoute);
app.use("/checkList",checkListRoute);
app.use("/favorite",favoriteRoute);
app.use("/getWatchList",getWatchListRoute);
app.use("/getFavorites",getFavoritesRoute);
app.use("/watched",watchedRoute);
app.use("/getWatched",getWatchedRoute);
app.use("/createPlayList",createPlayListRoute);
app.use("/getPlayList",getPlayListRoute);
app.use("/getList",getListRoute);
app.use("/addToPlayList",addToPlayListRoute);