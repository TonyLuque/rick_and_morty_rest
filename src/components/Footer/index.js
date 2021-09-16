/* eslint-disable react/jsx-pascal-case */
import { _Container } from "./styles";

import horizontal from "../../assets/Horizontal.png";
import "../../styles/Footer.css";

export const Footer = () => {
  return (
    <_Container className="container">
      <img className="image" src={horizontal} alt="" />
    </_Container>
  );
};
