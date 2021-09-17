/* eslint-disable react/jsx-pascal-case */
import { useState, useEffect } from "react";
import getEpisodeById from "../../api/getEpisodeById";
import { _Container, _MediumText, _SmallText } from "./styles";

export const CardInfoEpisodes = ({ smallTitle, description, date, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getEpisodeById(url).then((res) => setData(res.data));
  }, []);

  return (
    <_Container>
      <_SmallText title>{data ? data.name : smallTitle}</_SmallText>
      <_MediumText>{data ? data.episode : description}</_MediumText>
      {data ? <_SmallText title>{data.air_date}</_SmallText> : null}
    </_Container>
  );
};
