import React, { useEffect, useState } from "react";

import getCharacters from "../api/getCharacters";

const Characters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCharacters().then((res) => setData(res.data.results));
  }, [data]);

  console.log(data);

  let oa = data.map((e) => {
    return <p>{e.name}</p>;
  });

  return (
    <div>
      oa
      {oa}
    </div>
  );
};

export default Characters;
