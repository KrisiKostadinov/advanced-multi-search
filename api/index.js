const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { users } = require("./data");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server works!");
});

app.get("/users", (req, res) => {
  const { q } = req.query;
  let = usersData = users;

  if (q) {
      usersData = users.filter(
        (u) =>
          u.name.toLowerCase().includes(q.toLowerCase()) ||
          u.website.toLowerCase().includes(q.toLowerCase()) ||
          u.email.toLowerCase().includes(q.toLowerCase())
      );
  }

  res.json(usersData);
});

app.listen(port, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log("Server started on port: " + port);
  }
});
