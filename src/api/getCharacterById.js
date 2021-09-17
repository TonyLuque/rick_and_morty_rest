import { apiClient } from "./client";

const getCharacterById = (id) => {
  return apiClient.get(`/character/${id}`);
};

export default getCharacterById;
