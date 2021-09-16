import React, { useEffect, useState } from "react";

import getCharacters from "../api/getCharacters";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Characters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCharacters().then((res) => setData(res.data.results));
  }, [data]);

  console.log(data);

  const oa = data.map((e) => {
    return <p>{e.name}</p>;
  });

  return (
    <div>
      <Header />
      <div>{oa}</div>
      <Footer />
    </div>
  );
};

export default Characters;
