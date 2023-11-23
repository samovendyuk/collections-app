const Sequelize = require("sequelize");

const sequelize = new Sequelize("collections", "root", "", {
  dialect: "mysql",
  host: "mysql-5-lu7b:3306",
});

const Users = require("./Users")(sequelize);
const Collections = require("./UsersCollections")(sequelize);

module.exports = {
  sequelize: sequelize,
  users: Users,
  UserCollections: Collections,
};
