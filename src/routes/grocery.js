const { Router, response } = require("express");

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
router.get("/", (requestObject, responseObject) => {
  responseObject.cookie("visited", true, { maxAge: 10000 });
  responseObject.send(groceryList);
});

router.get("/:item", (request, response) => {
  //every single route params is gonna be stored
  console.log(request.params.item);
  // request.params.itema;
  const { item } = request.params;
  // find the item in the list
  const groceryItem = groceryList.find((g) => g.item === item);
  response.send(groceryItem);
});

//allow to create a ressource
router.post("/", (request, response) => {
  // log what the client sent
  console.log(request.body);
  // send a status
  response.sendStatus(201);
  //push what send the client into our grocery list
  groceryList.push(request.body);
});

module.exports = router;
