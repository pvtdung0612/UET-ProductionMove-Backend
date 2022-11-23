"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("accounts", [
      {
        username: "dung",
        password: "dung",
        roleKey: "R1",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "kha",
        password: "kha",
        roleKey: "R1",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "quang",
        password: "quang",
        roleKey: "R1",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "dungAgent",
        password: "dungAgent",
        roleKey: "R3",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "quangAgent",
        password: "quangAgent",
        roleKey: "R3",
        workplaceID: 2,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "khaAgent",
        password: "khaAgent",
        roleKey: "R3",
        workplaceID: 3,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "dungFactory",
        password: "dungFactory",
        roleKey: "R2",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "quangFactory",
        password: "quangFactory",
        roleKey: "R2",
        workplaceID: 2,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "khaFactory",
        password: "khaFactory",
        roleKey: "R2",
        workplaceID: 3,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "dungInsurance",
        password: "dungInsurance",
        roleKey: "R4",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "quangInsurance",
        password: "quangInsurance",
        roleKey: "R4",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "khaInsurance",
        password: "khaInsurance",
        roleKey: "R4",
        workplaceID: 1,
        image: "",
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
