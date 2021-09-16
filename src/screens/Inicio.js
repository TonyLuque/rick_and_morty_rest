import React from "react";
import "../styles/Inicio.css";
import rick_and_morty from "../assets/rick_and_morty.png";
import horizontal from "../assets/Horizontal.png";
import { Button } from "../components/Button";
import { useHistory } from "react-router-dom";

const Inicio = () => {
  const history = useHistory();

  return (
    <div className="container">
      <img className=" imageLogo1" src={horizontal} alt="" />
      <img className=" imageLogo2" src={rick_and_morty} alt="" />
      <p className="textTitle">Bienvenido a Rick and Morty</p>
      <p className="textDescription">
        En esta prueba, evaluaremos su capacidad para construir la aplicación
        mediante el análisis de código y la reproducción del siguiente diseño.
      </p>
      <Button title="Continuar" onClick={() => history.push("/characters")} />
    </div>
  );
};

export default Inicio;
