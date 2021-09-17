import { apiClient } from "./client";

const getCharacterById = (id) => {
  //   return apiClient.get(`/character/1`);
  return apiClient.get(`/character/${id}`);
};

export default getCharacterById;
