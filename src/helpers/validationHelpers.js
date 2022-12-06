var { validationResult } = require("express-validator");

var commonHelpers  = require("./helpers");

var validationHelpers = {
    /**
     * Generate response after validation errors
     * @param {Object} res Response Object
     * @param {Object} req Request Object
     * @returns  Response object containing validation errors
     */
    validateErrors: async (req, res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return commonHelpers.generateApiResponse(
                res,
                req,
                errors.array()[0].msg,
                400,
                []
            );
        }
    },
};

module.exports = {
    validationHelpers: validationHelpers,
};
