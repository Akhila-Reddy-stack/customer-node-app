var { check } = require("express-validator");

const { validationHelpers } = require("./validationHelpers");

var customer = {
    customerValidator: async (req, res, next) => {
        await check("firstname", "First name is required.").notEmpty().run(req);
        await check("lastname", "Last name is required.").notEmpty().run(req);
        await check("city", "City is required.").notEmpty().run(req);
        await check("company", "Company is required.").notEmpty().run(req);
      
        await validationHelpers.validateErrors(req, res);
        next();
    },
};

module.exports = customer;
