/* eslint-disable react/jsx-pascal-case */
import { _Container, _Text } from "./styles";

export const Button = ({ title, onClick, ...otherProps }) => {
  return (
    <_Container onClick={onClick} {...otherProps}>
      <_Text>{title}</_Text>
    </_Container>
  );
};
