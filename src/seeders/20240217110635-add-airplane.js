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
    await queryInterface.bulkInsert('Airplanes', [{
      modelNumber: 'Boeing 747',
      capacity: 366,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      modelNumber: 'Airbus 777',
      capacity: 368,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      modelNumber: 'Airbus 787',
      capacity: 242,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      modelNumber: 'Airindia A350',
      capacity: 440,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      modelNumber: 'Airasia 380',
      capacity: 853,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
     
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
