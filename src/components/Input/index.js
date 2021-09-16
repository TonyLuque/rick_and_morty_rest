/* eslint-disable react/jsx-pascal-case */
import { IconSearch } from "../../assets/icons/IconSearch";
import { _Container, _Input } from "./styles";

export const Input = ({ placeholder, ...otherProps }) => {
  return (
    <_Container>
      <IconSearch />
      <_Input placeholder={placeholder} {...otherProps} />
    </_Container>
  );
};
