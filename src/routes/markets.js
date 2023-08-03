const { Router } = require("express");
const router = Router();

const supermarkets = [
  { id: 1, store: "carrefour", km: 0.6 },
  { id: 2, store: "wallmart", km: 0.3 },
  { id: 3, store: "super U", km: 0.8 },
  { id: 1, store: "Auchan", km: 3.6 },
  { id: 2, store: "PapaJohn", km: 1.3 },
  { id: 3, store: "Ronflex", km: 2.8 },
];

router.get("/", (request, response) => {
  const { km } = request.query;
  console.log(km);
  const parsedKm = parseInt(km);
  if (km && !isNaN(parsedKm)) {
    //return all stores that are less than the km query
    const filteredStores = supermarkets.filter((s) => s.km <= parsedKm);
    response.send(filteredStores);
  } else response.send(supermarkets);
});

module.exports = router;

//route param to identify ressources on the server
// query params, to manipulate (not changing it) the response
