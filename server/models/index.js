const { Sequelize, DataTypes } = require("sequelize");


const connection = new Sequelize(
  'warehouse',
  'root',
  'root',
   {
     host: 'localhost',
     dialect: 'mysql'
   }
 );

connection.authenticate()
.then(() => {
  console.log('db is connected');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const Admins = require("./admins")(connection,DataTypes);
const Categories = require("./categories")(connection,DataTypes);
const Users = require("./users")(connection,DataTypes)
const Products = require("./products")(connection,DataTypes)

Categories.hasMany(Products);
Products.belongsTo(Categories)
Users.hasMany(Products);
Products.belongsTo(Users);

// connection.sync({force:true});
module.exports = {Admins,Categories,Users,Products}