"use strict";

let aryPasswordDefault = [
  "$2a$10$of1BzzzDStb040Y/KhRKzOonXJIqyOf85yk6VmP59Xp.YH6om7mhO", //dung
  "$2a$10$of1BzzzDStb040Y/KhRKzOGRcZQTBDIaE87OUZCnMd9MeJwuYapoG", //kha
  "$2a$10$of1BzzzDStb040Y/KhRKzOrDEEKZrl/qNZZoejJlxeUuHc1ScYLeq", //quang
  "$2a$10$of1BzzzDStb040Y/KhRKzOqcJZOdPEjyh6dp4e6O1LUsgTVi7B.bi", //dungAgent
  "$2a$10$of1BzzzDStb040Y/KhRKzO.xEUI7iIV3Ih0Q9Q3a6/tyeSXKpfL8K", //quangAgent
  "$2a$10$of1BzzzDStb040Y/KhRKzO8pX3scfEEGwxlIaci2.E.HdqcBEZbxK", //khaAgent
  "$2a$10$of1BzzzDStb040Y/KhRKzOBqG5ai9OoPj.AMY9gTJMD.itx.ec0x6", //dungFactory
  "$2a$10$of1BzzzDStb040Y/KhRKzOxjWHBydYnqckCcnRk/gjMk63ZUtp8Ca", //quangFactory
  "$2a$10$of1BzzzDStb040Y/KhRKzO1/4fYiVH8yi1h2cM5k3NDpYPOXWIrCi", //khaFactory
  "$2a$10$of1BzzzDStb040Y/KhRKzOx/0PYdR1c4Gg7DGFKKmyR2NSgVJ9FZ.", //khaFacdungInsuranceory
  "$2a$10$of1BzzzDStb040Y/KhRKzOvPXm3ad3D4r98Vc.XPNPMTPN8Xslbg.", //quangInsurance
  "$2a$10$of1BzzzDStb040Y/KhRKzOEK3nu62XX3t.3ckADEKHwX596ovLOIy", //khaInsurance
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("accounts", [
      {
        username: "dung",
        password: aryPasswordDefault[0],
        roleKey: "R1",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "kha",
        password: aryPasswordDefault[1],
        roleKey: "R1",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "quang",
        password: aryPasswordDefault[2],
        roleKey: "R1",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "dungAgent",
        password: aryPasswordDefault[3],
        roleKey: "R3",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "quangAgent",
        password: aryPasswordDefault[4],
        roleKey: "R3",
        workplaceID: 2,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "khaAgent",
        password: aryPasswordDefault[5],
        roleKey: "R3",
        workplaceID: 3,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "dungFactory",
        password: aryPasswordDefault[6],
        roleKey: "R2",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "quangFactory",
        password: aryPasswordDefault[7],
        roleKey: "R2",
        workplaceID: 2,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "khaFactory",
        password: aryPasswordDefault[8],
        roleKey: "R2",
        workplaceID: 3,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "dungInsurance",
        password: aryPasswordDefault[9],
        roleKey: "R4",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "quangInsurance",
        password: aryPasswordDefault[10],
        roleKey: "R4",
        workplaceID: 1,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "khaInsurance",
        password: aryPasswordDefault[11],
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
