const express = require("express");
require("./models/index");
const adminRouter = require("./admins.routes");
const categorieRouter = require("./categories.routes");
const productRouter = require("./products.routes");
const userRouter = require("./users.routes");
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
// const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use("/api/admin",adminRouter);
app.use("/api/categorie",categorieRouter);
app.use("/api/product",productRouter);
app.use("/api/user",userRouter);


app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
