const express = require("express");
const cors = require("cors");

var routerMain = require("./routes");
var commonHelpers  = require("./helpers/helpers");

var app = express();

// parse requests of content-type - application/json
app.use(express.json({ limit: "50mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

// enabling CORS for all requests
app.use(cors());

app.use("/", routerMain);

app.use((req, res, next) => {
  const err = new Error(process.env.ERR_404);
  err.status = 404;
  next(err);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  let errCode = err.status || 501;
  return commonHelpers.generateApiResponse(res, req, err.message, errCode);
});

module.exports = app;
