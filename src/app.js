const express = require("express");
const app = express();
const PORT = 3001;

//listen on port 3001
app.listen(PORT, () => console.log(`running express server on port ${PORT}`));

//allows to send json to the server
app.use(express.json());

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

//a middleware is a funtion to be invoked in the middle of 2 main functionnalities (most common : login)

//it allows client to get ressources
app.get("/groceries", (requestObject, responseObject) => {
  responseObject.send(groceryList);
});

//allow to create a ressource
app.post("/groceries", (request, response) => {
  // log what the client sent
  console.log(request.body);
  // send a status
  response.sendStatus(201);
  //push what send the client into our grocery list
  groceryList.push(request.body);
});
