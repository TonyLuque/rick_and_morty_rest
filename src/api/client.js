import { create } from 'apisauce'

export const apiClient = create({
  baseURL: `https://rickandmortyapi.com/api`
})