"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("customers", [
      {
        name: "N.A",
        address: "34 Đ.Cầu Giấy - Cầu Giấy - Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "H.B",
        address: "5 Đ.Hồ Tùng Mậu - Cầu Giấy - Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "P.C",
        address: "280 Đ.Nguyễn Trãi - Thanh Xuân - Hà Nội",
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
