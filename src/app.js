const express = require("express");
const app = express();
const PORT = 3001;
const groceriesRoute = require("./routes/grocery");
const marketRouter = require("./routes/markets");
const cookieParser = require("cookie-parser");
const session = require("express-session");

//allows to send json to the server
app.use(express.json());
//allows to send urlencoded data
app.use(express.urlencoded());

app.use(cookieParser());

app.use(
  session({
    secret: "AAEFKOKEOFZKEOD",
    resave: false,
    saveUninitialized: false,
  })
);

//a middleware is a funtion to be invoked in the middle of 2 main functionnalities (most common : login)

app.use("/api/v1/groceries", groceriesRoute);
app.use("/api/v1/markets", marketRouter);

app.listen(PORT, () => console.log(`running express server on port ${PORT}`));
