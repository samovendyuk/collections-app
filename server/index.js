const express = require("express");
const cors = require("cors");
const { users, UserCollections } = require("./model");
const bodyParser = require("body-parser");
const multer = require("multer");

const PORT = 4200;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  CRUD for users
app.get("/users", function (req, res) {
  users
    .findAll()
    .then((users) => {
      if (!res.status(200)) console.log("invalid");
      res.send(users);
    })
    .catch((err) => console.log(err));
});

app.post("/register", function (req, res) {
  const user = {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  };

  users
    .create(user)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.post("/login", function (req, res) {
  users
    .findOne({ where: { name: req.body.name, password: req.body.password } })
    .then((result) => {
      if (result === "" || result === null) {
        return res.status(400).send({ message: "Invalid name or password" });
      }
      console.log(result);
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// CRUD for posts

app.get("/posts", function (req, res) {
  UserCollections.findAll()
    .then((posts) => {
      console.log(posts);
      if (!res.status(200)) console.log("something wrong");
      res.send(posts);
    })
    .catch((err) => console.log(err));
});

app.post("/posts", function (req, res) {
  const post = req.body;
  console.log(req.body.name);
  UserCollections.create(post)
    .then((post) => {
      if (!res.status(200)) console.log("something wrong");
      res.send(post);
    })
    .catch((err) => console.log(err));
});

// 1 to many
users.hasMany(UserCollections, {
  foreignKey: "avtor_id",
});

UserCollections.belongsTo(users, {
  foreignKey: "avtor_id",
});

app.get("/allCol", function (req, res) {
  users
    .findAll({
      include: [
        {
          model: UserCollections,
        },
      ],
    })
    .then((col) => {
      res.send(JSON.stringify(col));
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`Server started on Port = ${PORT}`));
