const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "UsersCollections",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      photos: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      avtor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      theme: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      created: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
      tableName: "UsersCollections",
    }
  );
};
