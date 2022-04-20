"use strict";
const db = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "mrs.robinson",
          password: "12345",
          email: "yes@code.com",
          address: "0x26bd9f680f095fea96376346bbfb3245f53b30f8",
          balance: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "국비왕",
          password: "qkhferkv",
          email: "kingofgookbi@code.com",
          address: "0x6576bf2f27e1898cd40c37be30b8e5b2081192cb",
          balance: 0.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "fiesta",
          password: "booglev",
          email: "emart@naver.com",
          address: "0x3d8761340aeeca56eda57546f791fe45945a5eae",
          balance: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "뿡뿡이",
          password: "9909090",
          email: "tomatoketchup@gmail.com",
          address: "0x7db40ab27883b4638f6f13a9fc286e640ede1044",
          balance: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "사천짜장",
          password: "welirjhvrv",
          email: "codeking@naver.com",
          address: "0xa51794c4ed99669b020e1b0067f5e3952c189136",
          balance: 1.2345,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
