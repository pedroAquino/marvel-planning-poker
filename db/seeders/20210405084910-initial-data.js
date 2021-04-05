'use strict';

const { v4: uuid } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [{
     name: 'John Doe',
     role: 'OBSERVER',
     createdAt: new Date(),
     updatedAt: new Date()
   }]);

   const users = await queryInterface.sequelize.query('SELECT id from Users LIMIT 1;');
   const userRows = users[0];

   return await queryInterface.bulkInsert('Sessions', [{
     name: 'Demo Session',
     createdAt: new Date(),
     updatedAt: new Date(),
     displayId: uuid(),
     UserId: userRows[0].id
   }]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Sessions', null, {});
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
