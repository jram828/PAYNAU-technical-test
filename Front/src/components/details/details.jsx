import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "../Mystyles";
import "./details.css";
import { deletePerson, modificarDatos } from "../../redux/actions";

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const person = JSON.parse(localStorage.getItem("person"));

  const [personDetail, setPersonDetail] = useState({
    Email: "",
    Nombres: "",
    Apellidos: "",
    Identificacion: "",
    Telefono: "",
    Direccion: "",
    Edad: "",
  });

  useEffect(() => {
    setPersonDetail({
      ...personDetail,
      Email: person.Email,
      Telefono: person.Telefono,
      Nombres: person.Nombres,
      Apellidos: person.Apellidos,
      Direccion: person.Direccion,
      Edad: person.Edad,
      Identificacion: person.Identificacion,
    });
  }, [dispatch]);

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "¿Are you sure that you want to delete this person?"
    );

    if (isConfirmed) {
      dispatch(deletePerson(person.Identificacion));
      navigate("/");
    }
  };

  const handleUpdateDetail = (e) => {
    e.preventDefault();
    setPersonDetail({
      ...personDetail,
      [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const submitUpdateDetail = (e) => {
    e.preventDefault();
    dispatch(modificarDatos(personDetail));
    window.localStorage.setItem("person", JSON.stringify(personDetail));
  };


  return (
    <div className="contenedordetail">
      <div className="detail" key={personDetail.Identificacion}>
        <div className="encabezado">
          <h5 className="titulo">Details</h5>
        </div>
        <div className="menu-detail">
          <Button className="botonesdetails" onClick={submitUpdateDetail}>
            Update
          </Button>
          <Button onClick={handleDelete} className="botonesdetails">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z"
              ></path>
            </svg>
            Delete
          </Button>
          <Link to="/">
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={50.5}
                  d="M244 400L100 256l144-144M120 256h292"
                ></path>
              </svg>
              People
            </Button>
          </Link>
        </div>
        {personDetail.Nombres && (
          <h4 className="nombredetail">
            {personDetail.Nombres.toUpperCase()}{" "}
            {personDetail.Apellidos.toUpperCase()}{" "}
          </h4>
        )}
        <div className="info">
          <div className="personal">
            <div className="infodetail">
              <label htmlFor="Identificacion" className="labeldetail">
                Identification:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="Identificacion"
                id="Identificacion"
                value={personDetail.Identificacion}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="Telefono" className="labeldetail">
                Phone number:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="Telefono"
                id="Telefono"
                value={personDetail.Telefono}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="Email" className="labeldetail">
                Email address:
              </label>
              <input
                type="email"
                className="cajadetail"
                name="Email"
                id="Email"
                value={personDetail.Email}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="Direccion" className="labeldetail">
                Address:
              </label>
              <input
                type="text"
                className="cajadetail"
                name="Direccion"
                id="Direccion"
                value={personDetail.Direccion.toUpperCase()}
                onChange={handleUpdateDetail}
              />
            </div>
            <div className="infodetail">
              <label htmlFor="Edad" className="labeldetail">
                Age:
              </label>
              <input
                type="number"
                className="cajadetail"
                name="Edad"
                id="Edad"
                value={personDetail.Edad}
                onChange={handleUpdateDetail}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
