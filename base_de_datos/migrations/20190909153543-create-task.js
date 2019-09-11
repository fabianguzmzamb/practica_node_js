'use strict';
module.exports = {
  //up es para cuando se corre la migracion
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  //down es para cuando se revierte la migracion...por ejemplo aca hace drop table 
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};