const { Router } = require("express");
const router = Router();

const supermarkets = [
  {
    store: "carrefour",
  },
  { store: "wallmart" },
  { store: "super U" },
];

router.get("/", (request, response) => {
  response.send(supermarkets);
});

module.exports = router;
