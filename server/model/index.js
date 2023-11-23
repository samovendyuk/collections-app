const Sequelize = require("sequelize");

const sequelize = new Sequelize("collections", "root", "", {
  dialect: "mysql",
  host: process.env.SECRET,
});

const Users = require("./Users")(sequelize);
const Collections = require("./UsersCollections")(sequelize);

module.exports = {
  sequelize: sequelize,
  users: Users,
  UserCollections: Collections,
};
