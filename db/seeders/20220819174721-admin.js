'use strict';
const bcrypt = require('bcrypt');
const password = '123'
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'admin',
      email: 'admin@admin.com',
      password: await bcrypt.hash(password, 10),
      status: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
