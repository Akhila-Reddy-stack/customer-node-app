/* eslint-disable no-unused-vars */

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "customers",
      [
        {
          id: 1,
          first_name: 'Aman',
          last_name:  'Gupta',
          city: 'Ahmedabad', 
          company: 'SublimeDataSystems'
        },
        {
          id: 2,
          first_name: 'Alik',
          last_name:  'Jain',
          city: 'Delhi', 
          company: 'XYZ'
        },
        {
          id: 3,
          first_name: 'John',
          last_name:  'Smith',
          city: 'Delhi', 
          company: 'XYZ'
        },
        {
          id: 4,
          first_name: 'Arman',
          last_name:  'Jain',
          city: 'Pune', 
          company: 'ABX'
        },
        {
          id: 5,
          first_name: 'Hritwik',
          last_name:  'Das',
          city: 'Ahmedabad', 
          company: 'SublimeDataSystems'
        },
        {
          id: 6,
          first_name: 'Arvinder',
          last_name:  'Koi',
          city: 'Ahmedabad', 
          company: 'SublimeDataSystems'
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {},
};
