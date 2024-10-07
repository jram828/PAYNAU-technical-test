import axios from "axios";

export const GET_BY_ID_PERSON = "GET_BY_ID_PERSON";
export const GET_PEOPLE = "GET_PEOPLE"
export const SET_PERSON = "SET_PERSON";
export const DELETE_PERSON = "DELETE_PERSON";
export const UPDATE_PERSON = "UPDATE_PERSON";
export const POST_PERSON = "POST_PERSON";


export const getPersonById = (identificacion) => {

  return async (dispatch) => {
    const { data } = await axios.get(`/${identificacion}`);
    try {
      return dispatch({
        type: GET_BY_ID_PERSON,
        payload: data,
      });
    } catch (error) {
      console.log("Error:",error);
      window.alert("Person not found!");
    }
  };
};

export const getPeople = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/');
    return dispatch({
      type: GET_PEOPLE,
      payload: data,
    });
  };
};

export const deletePerson = (Identificacion) => {

  return async (dispatch) => {
    const data = await axios.delete(`/${Identificacion}`);
    return dispatch({
      type: DELETE_PERSON,
      payload: data,
    });
  };
};

export const modificarDatos = (person) => {
    return async (dispatch) => {
      const data = await axios.put('/', person);
      window.alert("Person was updated");
      return dispatch({
        type: UPDATE_PERSON,
        payload: data,
      });
    };
  };

export const setPerson = (source) => {
  return {
    type: SET_PERSON,
    payload: source,
  };
};

export const postPerson = (payload) => {

  return async (dispatch) => {
    const data = await axios.post('/', payload);
    return dispatch({
      type: POST_PERSON,
      payload: data,
    });
  };
};
