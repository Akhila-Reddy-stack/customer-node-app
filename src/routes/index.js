var express = require("express");
var router = express.Router();

var customerRoutes = require("./customers");
var commonHelpers  = require("../helpers/helpers");

router.get("/", async (req, res) => {
  return commonHelpers.generateApiResponse(
      res,
      req,
      "App is working.",
      200
  );
});

router.use("/customers", customerRoutes);

module.exports = router;
