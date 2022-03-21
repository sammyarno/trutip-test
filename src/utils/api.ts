import axios from '../plugins/axios';

import { AxiosResponse } from 'axios';
import { ListParams } from '../models/network';

export const getPokemons = async (params?: ListParams): Promise<AxiosResponse> => {
  const result = await axios.get('/pokemon', { params });
  return result;
};
export const getPokemonDetail = async (name: string): Promise<AxiosResponse> => {
  const result = await axios.get(`pokemon/${name}`);
  return result;
};