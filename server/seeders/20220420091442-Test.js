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

    await queryInterface.bulkInsert("posts", [
      {
        title: "안녕하세요",
        content: "가입인사올립니다",
        writer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "비트코인 설명",
        content:
          "We define an electronic coin as a chain of digital signatures.\n Each owner transfers the coin to the next by digitally signing a hash of the previous transaction and the public key of the next owner and adding these to the end of the coin.\n A payee can verify the signatures to verify the chain of ownership.\n 우리는 전자 화폐를 디지털 서명의 체인으로 정의합니다.\n 코인 소유자는 이전 거래 내역과 다음 소유자의 공개 키와의 해쉬 값을 코인 맨 뒤에 붙입니다.\n 돈을 받은 사람은 앞 사람이 유효한 소유자였다는 것을 확인할 수 있습니다.",
        writer: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "i'm rocket man",
        content:
          "She packed my bags last night pre-flight\nZero hour 9:00 a.m.\nAnd I'm gonna be high\nAs a kite by then\nI miss the Earth so much I miss my wife\nIt's lonely out in space\nOn such a timeless flight\nAnd I think it's gonna be a long, long time\n'Til touchdown brings me 'round again to find\nI'm not the man they think I am at home\nOh, no, no, no\nI'm a rocket man\nRocket man, burning out his fuse up here alone\nAnd I think it's gonna be a long, long time\n'Til touchdown brings me 'round again to find",
        writer: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "냉무",
        content: "",
        writer: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "파이",
        content:
          "3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789",
        writer: 4,
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
