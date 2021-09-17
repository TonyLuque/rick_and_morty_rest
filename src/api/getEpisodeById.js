import { apiClient } from "./client";

const getEpisodeById = (id) => {
  return apiClient.get(`/episode/${id}`);
};

export default getEpisodeById;
