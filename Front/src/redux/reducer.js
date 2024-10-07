import {
  GET_PEOPLE,
  GET_BY_ID_PERSON,
  DELETE_PERSON,
  SET_PERSON,
  POST_PERSON,
  UPDATE_PERSON,
} from "./actions";

let initialState = {
  people: [],
  person: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    case GET_BY_ID_PERSON:
      return {
        ...state,
        person: action.payload,
      };
    case SET_PERSON:
      return {
        ...state,
        person: action.payload,
      };
    case DELETE_PERSON:
      return {
        ...state,
        people: action.payload,
      };
    case UPDATE_PERSON:
      return {
        ...state,
        person: action.payload,
      };
    case POST_PERSON:
      return {
        ...state,
        person: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
