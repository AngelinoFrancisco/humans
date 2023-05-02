const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'humans',
 'root',
 '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
); 

module.exports = sequelize