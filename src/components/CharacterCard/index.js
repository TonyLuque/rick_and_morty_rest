import { useState, useEffect } from "react";
/* eslint-disable react/jsx-pascal-case */
import getCharacterById from "../../api/getCharacterById";
import { ModalCharacter } from "../ModalCharacter";
import {
  _Container,
  _GroupText,
  _Image,
  _LargeText,
  _MediumText,
  _MiddleContainer,
  _SmallText,
} from "./styles";

export const CharacterCard = ({
  id,
  title,
  image,
  status,
  type,
  lastLocation,
  firstChapter,
  ...otherProps
}) => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  //   useEffect(() => {
  //     getCharacterById(id).then((res) => setData(res.data));
  //   }, []);

  //   console.log(data);

  return (
    <_Container onClick={() => setShow(true)} {...otherProps}>
      <_MiddleContainer>
        <_Image src={image} alt="character" />
      </_MiddleContainer>
      <_MiddleContainer padding>
        <_GroupText>
          <_SmallText>{`${status} - ${type}`}</_SmallText>
          <_LargeText>{title}</_LargeText>
        </_GroupText>
        <_GroupText>
          <_SmallText title>Last known location:</_SmallText>
          <_MediumText>{lastLocation}</_MediumText>
        </_GroupText>
        <_GroupText>
          <_SmallText title>First seen in:</_SmallText>
          <_MediumText>{firstChapter}</_MediumText>
        </_GroupText>
      </_MiddleContainer>
      {show ? <ModalCharacter id={id} /> : null}
    </_Container>
  );
};
