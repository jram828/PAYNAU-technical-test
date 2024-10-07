import { Router } from "express";
import { deletePersonHandler, postPersonHandler, updatePersonHandler } from "../handlers/personCommandHandlers.js";
import { getAllPersonHandler } from "../handlers/personQueryHandlers copy.js";


const personRouter = Router();

/**
* @swagger
* tags:
*   name: Person
*   description: Person related routes
* /person:
*   get:
*     summary: Returns the list of all the persons
*     responses:
*       200:
*         description: Returns the list of all the persons
*         content: {application/json: {
 *           schema: { type: array, items: {type: object, properties: {"Nombres":{type: string, example: "Juan"},"Apellidos":{type: string, example: "Perez"},"Identificacion":{type: number, example: "123456"},"Email":{type: string, example: "juan@gmail.com"},"Direccion":{type: string, example: "Calle 123"},"Telefono":{type: number, example: "123456"},"Edad":{type: number, example: "25" }}}}}}
*     
*/

personRouter.get("/", getAllPersonHandler);

/**
* @swagger
* /person:
*   post:
*     summary: Creates a new person
*     requestBody:
*         required: true 
*         content: {application/json: {schema: {type: object, example: {"Nombres":"Juan","Apellidos":"Perez","Identificacion":"1234567890","Email":"juan@gmail.com","Direccion":"Calle 123 # 20 - 30","Telefono":"123456","Edad":"25"}}}}
*     responses:
*       200:
*         description: Returns the created person
*         content: {application/json: {
*           schema: { type: array, items: {type: object, properties: {"Nombres":{type: string, example: "Juan"},"Apellidos":{type: string, example: "Perez"},"Identificacion":{type: number, example: "123456"},"Email":{type: string, example: "juan@gmail.com"},"Direccion":{type: string, example: "Calle 123"},"Telefono":{type: number, example: "123456"},"Edad":{type: number, example: "25" }}}}}}
*     
*/

personRouter.post("/", postPersonHandler);

/**
* @swagger
* /person:
*   put:
*     summary: Updates the person according to the identificacion
*     requestBody: 
*         required: true
*         content: {application/json: {schema: {type: object, example: {"Nombres":"Juan","Apellidos":"Perez","Identificacion":"1234567890","Email":"juan@gmail.com","Direccion":"Calle 123 # 20 - 30","Telefono":"123456","Edad":"25"}}}}
*     responses:
*       200:
*         description: Updates the person
*         content: {text/plain: {schema: {type: string, example: "'Updated person'"}}}
*/

personRouter.put("/", updatePersonHandler); //Actualizar datos (uno a la vez)

/**
* @swagger
* /person:
*   delete:
*     summary: Deletes the person according to the identificacion
*     requestBody: 
*         required: true
*         content: {application/json: {schema: {type: object, example: {"Identificacion": "123456"}}}}
*     responses:
*       200:
*         description: Deletes the person
*         content: {text/plain: {schema: {type: string, example: "'Deleted'"}}}
*/

personRouter.delete("/:Identificacion", deletePersonHandler);

export default personRouter;
