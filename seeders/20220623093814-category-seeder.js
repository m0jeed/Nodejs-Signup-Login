'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'First Category'
      },
      {
        name: 'Second Category'
      },
      {
        name: 'Third Category'
      },
      {
        name: 'Fourth Category'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', {}, null)
  }
};
