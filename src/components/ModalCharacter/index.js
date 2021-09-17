/* eslint-disable react/jsx-pascal-case */
import { useState, useEffect } from "react";
import getCharacterById from "../../api/getCharacterById";
import { Button } from "../Button";
import {
  _Close,
  _Container,
  _ContainerCardInfo,
  _ContainerModal,
  _ContainerText,
  _ImageProfile,
} from "./styles";
import { CardInfo } from "../CardInfo";
import { CardInfoEpisodes } from "../CardInfoEpisodes";

export const ModalCharacter = ({ id, show, ...othersProps }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCharacterById(id).then((res) => setData(res.data));
  }, []);

  // console.log(data);
  let episodes = [];

  if (data.episode) {
    episodes = data.episode.map((e, index) => {
      const idEpisode = e.replace(/[a-zA-Z://.]+/g, "");
      return <CardInfoEpisodes key={index} url={idEpisode} />;
    });
  }

  return (
    <_ContainerModal {...othersProps}>
      <_Container>
        <_Close
          onClick={() => {
            window.location.reload();
          }}
        >
          X
        </_Close>
        <_ImageProfile src={data.image} />
        <_ContainerText>
          <p>Informacion</p>
          <_ContainerCardInfo>
            <CardInfo smallTitle={"Gender"} description={data.gender} />
            <CardInfo
              smallTitle={"Origin"}
              description={data.origin ? data.origin.name : ""}
            />
            <CardInfo
              smallTitle={"Type"}
              description={data.type === "" ? "Unknown" : data.type}
            />
          </_ContainerCardInfo>
          <p>Episodios</p>
          <_ContainerCardInfo>{episodes}</_ContainerCardInfo>

          <p>Presonajes interesantes</p>
          <_ContainerCardInfo></_ContainerCardInfo>
        </_ContainerText>
        <Button
          title="Compartir personaje"
          style={{ alignSelf: "end" }}
        ></Button>
      </_Container>
    </_ContainerModal>
  );
};
