"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("customers", {
      id: {
        type: Sequelize.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      company: {
        type: Sequelize.STRING,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("customers");
  },
};
