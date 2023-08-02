const { Router } = require("express");

const router = Router();

const groceryList = [
  {
    item: "milk",
    quantity: 2,
  },
  {
    item: "steak",
    quantity: 5,
  },
  {
    item: "pop tart",
    quantity: 3,
  },
];

//it allows client to get ressources
router.get("/groceries", (requestObject, responseObject) => {
  responseObject.send(groceryList);
});

//allow to create a ressource
router.post("/groceries", (request, response) => {
  // log what the client sent
  console.log(request.body);
  // send a status
  response.sendStatus(201);
  //push what send the client into our grocery list
  groceryList.push(request.body);
});

router.get("/groceries/:item", (request, response) => {
  //every single route params is gonna be stored
  console.log(request.params.item);
  // request.params.itema;
  const { item } = request.params;
  // find the item in the list
  const groceryItem = groceryList.find((g) => g.item === item);
  response.send(groceryItem);
  s;
});

module.exports = router;
