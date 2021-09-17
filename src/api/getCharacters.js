import { apiClient } from "./client";

const getCharacters = (page) => {
  return apiClient.get(`/character?page=${page ? page : "1"}`, {
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};

export default getCharacters;
