const express = require("express");
const app = express();
const PORT = 3001;
const groceriesRoute = require("./routes/grocery");

//allows to send json to the server
app.use(express.json());
//allows to send urlencoded data
app.use(express.urlencoded());

//a middleware is a funtion to be invoked in the middle of 2 main functionnalities (most common : login)

app.use("/api/v1", groceriesRoute);

app.listen(PORT, () => console.log(`running express server on port ${PORT}`));
