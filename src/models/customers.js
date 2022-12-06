"use strict";

module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define(
    "Customers",
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name:{
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      company: {
        type: DataTypes.STRING,
      },
     
    },
    { tableName: "customers", timestamps: false }
  );
  // eslint-disable-next-line no-unused-vars
  return Customers;
};
