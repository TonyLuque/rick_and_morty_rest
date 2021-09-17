/* eslint-disable react/jsx-pascal-case */

import { _Container, _MediumText, _SmallText } from "./styles";

export const CardInfo = ({ smallTitle, description, date, url }) => {
  return (
    <_Container>
      <_SmallText title>{smallTitle}</_SmallText>
      <_MediumText>{description}</_MediumText>
      {date ? <_SmallText title>{date}</_SmallText> : null}
    </_Container>
  );
};
