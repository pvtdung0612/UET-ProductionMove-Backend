"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("sells", [
      {
        customerID: 1,
        productID: 1,
        sellDate: new Date("2022-11-20"),
        agentID: 1,
        insuranceTermEndDate: new Date("2023-5-20"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customerID: 2,
        productID: 10,
        sellDate: new Date("2022-11-15"),
        agentID: 2,
        insuranceTermEndDate: new Date("2023-5-15"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
