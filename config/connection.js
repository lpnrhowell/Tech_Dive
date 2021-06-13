require("dotenv").config({ debug: process.env.DEBUG });


const Sequelize = require("sequelize");

// require('dotenv').config();


let sequelize;

if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USERNAME,
		process.env.DB_PASSWORD,
		{
			host: "us-cdbr-east-04.cleardb.com",
			dialect: "mysql",
			port: 3306,
		}
	);
}
console.log(`this is db ${process.env.DB_NAME}`);

module.exports = sequelize;
