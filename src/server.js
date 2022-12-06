/* eslint-disable vars-on-top */
require("dotenv").config();
var app = require("./app");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

let APP_PORT = process.env.APP_PORT || 5000;

let server = app

// starting the server
server.listen(APP_PORT, () => {
  console.log(
    "App started successfully " +
    APP_PORT
  );
});
