import {useEffect} from "react";
import "./people.css";
import { useDispatch, useSelector } from "react-redux";
import { getPeople} from "../../redux/actions";
import loading from "../../assets/loading.gif";
import Person from "../person/person";
import { Button } from "../Mystyles";
import { Link } from "react-router-dom";

const People = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);
 
  return (
    <div className="peoplecontainer">
      <div className="header">
        <h1 className="title">People</h1>
      </div>
      <br />
      <div className="registrocliente">
       
        <Link to="/register">
          <Button>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path fill="black" d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
            </svg>
            Register person
          </Button>
        </Link>
      </div>
      <div className="divpersonas">

        {people.length === 0 && (
          <div className="loading-container">
            <img className="loading-image" src={loading} alt="loading" />
          </div>
        )}
        {people.length > 0 &&
          people.map((person) => {
            return (
              <div key={person.Identificacion}>
                <Person person={person} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default People;