import { models } from "../../../DB.js";
const { Person} = models;

const updatePerson = async (
  Nombres,
  Apellidos,
  Identificacion,
  Email,
  Direccion,
  Telefono,
  Edad,
) => {
  const [updateCount, updatedPerson] = await Person.update(
    {
      Nombres: Nombres,
      Apellidos: Apellidos,
      Identificacion: Identificacion,
      Email: Email,
      Direccion: Direccion,
      Telefono: Telefono,
      Edad: Edad,
    },
    {
      where: {
        Identificacion: Identificacion,
      },
    },
  );

  if (updateCount > 0) {
    return "Updated person";
  } else {
    return "Not possible to update person";
  }
};

export { updatePerson };
