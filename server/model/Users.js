const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "Users",
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
      email: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );
};
