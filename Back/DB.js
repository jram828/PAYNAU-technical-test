import { config } from "dotenv";
import { Sequelize } from "sequelize";

import personaModel from "./src/models/Person.js";


config(); // Cargar variables de entorno desde el archivo .env

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;
console.log("Datos conexion:", { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME });



//! Configuración de Sequelize para entorno local

const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{host:DB_HOST, port:DB_PORT,dialect:'mysql', logging: false, native: false});

const Persona= personaModel(sequelize);

const models = {
  ...sequelize.models,
  conn: sequelize,
};

export { models };
