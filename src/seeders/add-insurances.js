"use strict";

/** @type {import('sequelize-cli').Migration} */

let tempEndDate = new Date();
tempEndDate.setDate(tempEndDate.getDate() + 3);

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("insurances", [
      {
        productID: 1,
        errorReportsID: 1,
        startDate: new Date(),
        endDate: tempEndDate,
        result: "SUCCESS",
        description: "sửa lỗi main hình cho khách",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productID: 2,
        errorReportsID: 2,
        startDate: new Date(),
        endDate: tempEndDate,
        result: "SUCCESS",
        description: "sửa lỗi bàn phím không sử dụng được",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productID: 3,
        errorReportsID: 3,
        startDate: new Date(),
        endDate: tempEndDate,
        result: "SUCCESS",
        description: "sửa lỗi màn hình xanh",
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
