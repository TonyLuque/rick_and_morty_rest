import React, { useEffect, useState } from "react";

import "../styles/Characters.css";

import getCharacters from "../api/getCharacters";
import { CharacterCard } from "../components/CharacterCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Characters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCharacters().then((res) => setData(res.data.results));
  }, []);

  const cards = data.map((e) => {
    return (
      <CharacterCard
        id={e.id}
        key={e.id}
        title={e.name}
        status={e.status}
        type={e.species}
        image={e.image}
        lastLocation={e.location.name}
        firstChapter={e.episode[0]}
      />
    );
  });

  return (
    <div>
      <Header />
      <div className="containerCharacters">{cards}</div>
      <Footer />
    </div>
  );
};

export default Characters;
