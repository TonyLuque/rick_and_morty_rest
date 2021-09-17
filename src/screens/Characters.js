import React, { useEffect, useState } from "react";

import "../styles/Characters.css";

import getCharacters from "../api/getCharacters";
import { CharacterCard } from "../components/CharacterCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

const Characters = () => {
  const [data, setData] = useState([]);
  const [response, setResponse] = useState();
  const [page, setPage] = useState();

  useEffect(() => {
    getCharacters(page).then((res) => {
      setResponse(res.data.info);
      setData(res.data.results);
    });
  }, [page]);

  const nextPage = () => {
    if (page && response.next) {
      setPage(page + 1);
    } else {
      setPage(2);
    }
  };

  const prevPage = () => {
    if (page && response.prev) {
      setPage(page - 1);
    }
  };
  console.log(page);
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
      <div className="containerButtons">
        {response
          ? response.prev && (
              <Button title="Anterior" onClick={() => prevPage()} />
            )
          : null}

        {response
          ? response.next && (
              <Button title="Siguiente" onClick={() => nextPage()} />
            )
          : null}
      </div>
      <Footer />
    </div>
  );
};

export default Characters;
