/* eslint-disable react/jsx-pascal-case */
import { _Container } from "./styles";
import "../../styles/Header.css";
import rick_and_morty from "../../assets/rick_and_morty.png";
import { Input } from "../Input";

export const Header = () => {
  return (
    <_Container className="containerHeader">
      <img className="imageHeader" src={rick_and_morty} alt="" />
      <Input placeholder="Buscar un personaje..." />
    </_Container>
  );
};
