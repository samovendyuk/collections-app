const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.MYSQL_HOST,
  }
);

console.log(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD
);

const Users = require("./Users")(sequelize);
const Collections = require("./UsersCollections")(sequelize);

module.exports = {
  sequelize: sequelize,
  users: Users,
  UserCollections: Collections,
};
