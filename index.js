const express = require("express");

const server = express();

server.use(express.json());

const PORT = 3000;

const {sequalize} = require("sequelize");

const {DB_USER,DB_PWD,DB_NAME,DB_PORT,APP_PORT, DB_SERVER} = process.env

const conString = `mysql://${DB_USER}${DB_PWD && `:${DB_PWD}`}@${DB_SERVER}:${DB_PORT}/${DB_NAME}`;

const seq = Sequelize(conString);

seq
	.authenticate()
	.then(() => {
		console.log("All OK");
	})
	.catch((e) => {
		console.error(e.message);
	});

module.exports = seq;