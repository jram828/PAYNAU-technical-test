import { useState } from "react";
import "./register.css";
import { Button } from "../Mystyles";
import { useNavigate } from "react-router-dom";
import { postPerson } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Register = () => {
    const [personData, setPersonData] = useState({
      Email: "",
      Nombres: "",
      Apellidos: "",
      Identificacion: "",
      Telefono: "",
      Direccion: "",
      Edad: ""
    });
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const handleChangeRegistro = (e) => {
        setPersonData({
        ...personData,
        [e.target.name]: e.target.value, // Sintaxis ES6 para actualizar la key correspondiente
      });
    };

    const submitHandlerRegistro = (e) => {
      e.preventDefault();
      dispatch(postPerson(personData));
      navigate('/');
    };
  return (
    <div className="contenedorregistro">
      <form className="datos" method="post" onSubmit={submitHandlerRegistro}>
        <h1 className="titulo">Person register</h1>
        <br />
        <br />
        <div className="inforegistropersona">
          <label htmlFor="Nombres" className="labelregistrodepersona">
            Name(s):
          </label>
          <input
            type="text"
            name="Nombres"
            id="name"
            className="cajaregistropersona"
            value={personData.Nombres}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="Apellidos" className="labelregistrodepersona">
            Lastname(s):
          </label>
          <input
            type="text"
            className="cajaregistropersona"
            name="Apellidos"
            id="lastname"
            value={personData.Apellidos}
            onChange={handleChangeRegistro}
          />
        </div>
        <br />
        <br />
        <div className="inforegistropersona">
          <label htmlFor="Identificacion" className="labelregistrodepersona">
            Identification:
          </label>
          <input
            type="number"
            className="cajaregistropersona"
            name="Identificacion"
            id="cedula"
            value={personData.Identificacion}
            onChange={handleChangeRegistro}
          />

          <label htmlFor="Telefono" className="labelregistrodepersona">
            {" "}
            Celular:
          </label>
          <input
            type="number"
            name="Telefono"
            id="celular"
            className="cajaregistropersona"
            value={personData.Telefono}
            onChange={handleChangeRegistro}
          />
        </div>

        <br />
        <br />
        <div className="inforegistropersona">
          <label htmlFor="Email" className="labelregistrodepersona">
            Email:
          </label>
          <input
            type="email"
            name="Email"
            id="email"
            className="cajaregistropersona"
            value={personData.Email}
            onChange={handleChangeRegistro}
          />
          <label htmlFor="Direccion" className="labelregistrodepersona">
            Address:
          </label>
          <input
            type="text"
            name="Direccion"
            id="direccion"
            className="cajaregistropersona"
            value={personData.Direccion}
            onChange={handleChangeRegistro}
          />
        </div>
        <br />
        <br />
        <div className="inforegistropersona">
          <label htmlFor="Edad" className="labelregistrodepersona">
            Age:
          </label>
          <input
            type="text"
            name="Edad"
            id="Edad"
            className="cajaregistropersona"
            value={personData.Edad}
            onChange={handleChangeRegistro}
          />
        </div>
        <div className="savebutton">
          <Button
            onClick={submitHandlerRegistro}
            disabled={
              !personData.Email ||
              !personData.Identificacion||
              !personData.Nombres||
              !personData.Apellidos||
              !personData.Edad
            }
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Register;
