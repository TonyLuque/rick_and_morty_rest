import { useState, useEffect } from "react";
import getCharacterById from "../../api/getCharacterById";

export const ModalCharacter = ({ id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCharacterById(id).then((res) => setData(res.data));
  }, []);

  console.log(data);
  return <div>oa{id}</div>;
};
