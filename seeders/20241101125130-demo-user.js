'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Users', [{
       username: 'Petya',
       password: '123',
       email: 'petya@mail.ru',
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
   
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Users', null, {});
    
  }
};
