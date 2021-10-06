const { DataType } = require("sequelize");

const Sequelize = ("./../config/db");


const Rol = sequelize.define(
	"rol",
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "rol",
		//timestamps: false, // put in false if the fields created_at and updated_at, do not exist in the table
		underscored: true, //to sequelize respect the unerscores
	}
);

module.exports = Rol;