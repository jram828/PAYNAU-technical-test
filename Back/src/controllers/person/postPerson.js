import { models } from "../../../DB.js";
const { Person } = models;
const createPerson= async (
  Nombres,
  Apellidos,
  Identificacion,
  Email,
  Direccion,
  Telefono,
  Edad,
) => {
  if (
    !Email ||
    !Identificacion ||
    !Nombres||
    !Apellidos||
    !Direccion||
    !Telefono||
    !Edad||
    Telefono.length >= 15 ||
    Edad.length > 15 ||
    Identificacion.length > 10
  ) {
    return ("Missing data or wrong input data");
  } else {
    try {
      const newPerson = await Person.create({
        Nombres: Nombres,
        Apellidos: Apellidos,
        Identificacion: Identificacion,
        Email: Email,
        Direccion: Direccion,
        Telefono: Telefono,
        Edad: Edad,
      });
      return (newPerson.dataValues);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
};

export { createPerson };
