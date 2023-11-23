const Sequelize = require("sequelize");

const sequelize = new Sequelize("collections", "root", "", {
  dialect: "mysql",
  host: "https://github.com/render-examples/mysql",
});

const Users = require("./Users")(sequelize);
const Collections = require("./UsersCollections")(sequelize);

module.exports = {
  sequelize: sequelize,
  users: Users,
  UserCollections: Collections,
};
