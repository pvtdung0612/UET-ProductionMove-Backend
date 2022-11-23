"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
      },
      bornDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      factoryID: {
        type: Sequelize.INTEGER,
      },
      hereRole: {
        type: Sequelize.STRING,
      },
      hereID: {
        type: Sequelize.INTEGER,
      },
      productLine: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      cpu: {
        type: Sequelize.STRING,
      },
      screen: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
