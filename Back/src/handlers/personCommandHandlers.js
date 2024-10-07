import { deletePerson } from "../controllers/person/deletePerson.js";
import { createPerson } from "../controllers/person/postPerson.js";
import { updatePerson } from "../controllers/person/updatePerson.js";

const postPersonHandler = async (req, res) => {

  const {
    Nombres,
    Apellidos,
    Identificacion,
    Email,
    Direccion,
    Telefono,
    Edad,
  } = req.body;

  try {
    const response = await createPerson(
      Nombres,
      Apellidos,
      Identificacion,
      Email,
      Direccion,
      Telefono,
      Edad,
    );
    if (response) res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePersonHandler = async (req, res) => {

  const {Identificacion } = req.params;

  try {
    const response = await deletePerson(Identificacion);
    console.log("response delete:", response);
    if (response ==="Deleted") res.status(200).json(response );
    else res.status(404).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePersonHandler = async (req, res) => {

  const {
    Nombres,
    Apellidos,
    Identificacion,
    Email,
    Direccion,
    Telefono,
    Edad,
  } = req.body;
  
  try {
    
    const response = await updatePerson(
      Nombres,
      Apellidos,
      Identificacion,
      Email,
      Direccion,
      Telefono,
      Edad,
    );
    if (response) res.status(200).json(response);
    else res.status(204).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export  {
  postPersonHandler,
  deletePersonHandler,
  updatePersonHandler,
};
