 
import { apiClient } from './client'

const getCharacters = () => {
  return apiClient.get(
    `/character`,
  )   
}

export default getCharacters