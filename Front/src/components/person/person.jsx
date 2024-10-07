import "./person.css";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { setPerson} from "../../redux/actions";
import PropTypes from 'prop-types';

import { useNavigate } from "react-router-dom";

const Person = ({person}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickDetail = () => {

      dispatch(setPerson(person));
      window.localStorage.setItem("person", JSON.stringify(person));
      navigate("/detail");
  };

  return (
    <div className="personcard" key={person.Identificacion}>
      <Link to={"/details"} onClick={onClickDetail} className="link">
        <h1 className="titulocard">
          {person.Nombres.toUpperCase()}{" "}
          {person.Apellidos.toUpperCase()}
        </h1>
      </Link>
    </div>
  );
};
Person.propTypes = {
  person: PropTypes.shape({
    Identificacion: PropTypes.number.isRequired,
    Nombres: PropTypes.string.isRequired,
    Apellidos: PropTypes.string.isRequired,
  }).isRequired,
};

export default Person;

