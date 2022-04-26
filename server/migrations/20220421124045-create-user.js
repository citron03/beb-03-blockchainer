'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        username: {
          primaryKey: true,
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        address: {
          type: Sequelize.STRING,
        },
        balance: {
          type: Sequelize.FLOAT,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
