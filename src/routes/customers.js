/* eslint-disable eqeqeq */
var express = require("express");
var router = express.Router();
var Op = require("sequelize").Op;

var Models = require("../models");
var helpers = require("../helpers/helpers");
var customerValidator = require("../helpers/customerValidator");

// Get Customer list  with search and pagination
router.get("/", async (req, res) => {
  const firstName = req.query.first_name;
  const LastName = req.query.last_name;
  const City = req.query.city;
  const page = parseInt(req.query.page, 10);
  const perPage = parseInt(req.query.per_page, 10);
  const dataOffset = helpers.getPaginationOffset(page, perPage);
  let where = {};
  if (
    (firstName != null && firstName != "") ||
    (LastName != null && LastName != "") ||
    (City != null && City != "")
  ) {
    where = {
      [Op.or]: [
        { first_name: { [Op.substring]: firstName } },
        { last_name: { [Op.substring]: LastName } },
        { city: { [Op.substring]: City } },
      ],
    };
  }

  const allCustomers = await Models.Customers.findAndCountAll({
    where: where,
    offset: dataOffset.offset,
    limit: dataOffset.perPage,
  });
  if (allCustomers != null) {
    const data = {
      count: allCustomers.count,
      rows: allCustomers.rows,
    };
    return helpers.generateApiResponse(res, req, "Customers found.", 200, data);
  }
  return helpers.generateApiResponse(res, req, "No data found.", 404, []);
});

// Get Customer by Id
router.get("/list/:id", async (req, res, next) => {
  const Id = req.params.id;
  let whereCondition = {
    id: Id,
  };

  const CustomerExists = await Models.Customers.findOne(
    {
      where: whereCondition,
    },
    { raw: true }
  );

  if (CustomerExists != null) {
    return helpers.generateApiResponse(
      res,
      req,
      "Customer data is found",
      200,
      CustomerExists
    );
  }
  return helpers.generateApiResponse(
    res,
    req,
    "Customer data not found.",
    400,
    []
  );
});

// Get Unique cities with customer count
router.get("/uniquecities", async (req, res) => {
  let CustomerExists = await Models.Customers.findAndCountAll();

  let uniqueCities = {};

  CustomerExists.rows.forEach((el) => {
    uniqueCities[el.city] = (uniqueCities[el.city] || 0) + 1;
  });

  if ((Object.keys(uniqueCities).length === 0) != null) {
    return helpers.generateApiResponse(
      res,
      req,
      "Unique cities with customer count is found",
      200,
      uniqueCities
    );
  }
  return helpers.generateApiResponse(
    res,
    req,
    "Customer data not found.",
    400,
    []
  );
});

// Add new customer
router.post(
  "/add",
  [customerValidator.customerValidator],
  async (req, res, next) => {
    const { firstname, lastname, city, company } = req.body;
    const fistNameExists = await Models.Customers.findOne({
      where: {
        first_name: firstname,
      },
    });

    if (fistNameExists != null) {
      return helpers.generateApiResponse(
        res,
        req,
        "First name already exists.",
        400,
        []
      );
    }
    const cityExists = await Models.Customers.findOne({
      where: {
        city: city,
      },
    });
    const companyExists = await Models.Customers.findOne({
      where: {
        company: company,
      },
    });
    if (cityExists === null) {
      return helpers.generateApiResponse(
        res,
        req,
        "City with new name can't be added.",
        400,
        []
      );
    }
    if (companyExists === null) {
      return helpers.generateApiResponse(
        res,
        req,
        "Company with new name can't be added.",
        400,
        []
      );
    }
    const customerCreate = await Models.Customers.create({
      first_name: firstname,
      last_name: lastname,
      city: city,
      company: company,
    });

    if (customerCreate != null) {
      return helpers.generateApiResponse(
        res,
        req,
        "Customer added successfully.",
        200,
        [{ id: customerCreate.id }]
      );
    }
    return helpers.generateApiResponse(
      res,
      req,
      "Something went wrong while creating new customer.",
      400,
      []
    );
  }
);

module.exports = router;
