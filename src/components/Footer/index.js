/* eslint-disable react/jsx-pascal-case */
import { _Container } from "./styles";

import horizontal from "../../assets/Horizontal.png";
import "../../styles/Footer.css";

export const Footer = () => {
  return (
    <_Container className="containerFooter">
      <img className="imagFooter" src={horizontal} alt="" />
    </_Container>
  );
};
