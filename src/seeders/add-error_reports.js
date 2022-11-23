"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("error_reports", [
      {
        customerID: 1,
        productID: 1,
        description: "Khách hàng báo lỗi màn hình không hiển thị",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customerID: 2,
        productID: 2,
        description: "Khách hàng báo lỗi bàn phím không sử dụng được",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        customerID: 3,
        productID: 3,
        description: "Khách hàng báo lỗi màn hình xanh",
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
