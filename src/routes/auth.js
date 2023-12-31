const { Router } = require("express");
const User = require("../db/schemas/User");

const router = Router();

router.post("/login", (request, response) => {
  const { username, password } = request.body;
  if (username && password) {
    if (request.session.user) {
      response.send(request.session.user);
    } else {
      request.session.user = { username };
      response.send(request.session);
    }
  } else response.send(401);
});

router.post("/register", async (request, response) => {
  const { username, password, email } = request.body;
  // it should return a document in the db if we can find either the username or email
  const userDb = await User.findOne({ $or: [{ username }, { email }] });
  if (userDb) {
    response.status(400).send({ msg: "User already exist" });
  } else {
    const newUser = await User.create({ username, password, email });
    response.send(201);
  }
});

module.exports = router;
