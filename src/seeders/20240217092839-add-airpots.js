'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Jakarta Airport',
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bandung Airport',
        cityId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Surabaya Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yogyakarta Airport',
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
