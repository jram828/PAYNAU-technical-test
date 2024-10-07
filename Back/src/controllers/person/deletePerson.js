import { models } from "../../../DB.js";
const { Person } = models;

const deletePerson = async (Identificacion) => {
  const [updateCount, updatedPerson] = await Person.update(
    { activo: false },
    {
      where: {
        Identificacion: Identificacion,
      },
    },
  );

  console.log('count delete',updateCount, updatedPerson);
  if (updateCount > 0) {
    return "Deleted";
  } else {
    return "Not possible to delete";
  }
};

export { deletePerson };
