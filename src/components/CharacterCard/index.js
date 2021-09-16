/* eslint-disable react/jsx-pascal-case */
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
  title,
  image,
  status,
  type,
  lastLocation,
  firstChapter,
  ...otherProps
}) => {
  return (
    <_Container {...otherProps}>
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
    </_Container>
  );
};
