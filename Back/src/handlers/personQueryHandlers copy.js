import { getAllPerson } from "../controllers/person/getAllPerson.js";

const getAllPersonHandler = async (req, res) => {

  try {
    const response = await getAllPerson(req.query);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export  {
  getAllPersonHandler ,
};
