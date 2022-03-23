import { getPokemonDetail, getPokemons } from '../../utils/api';
import { InitialListParamsValue } from '../../utils/constants';
import type { ListParams } from '../../models/network';
import { GET_DETAIL, GET_LIST, REMOVE_OWNED, SET_OWNED } from './types';
import { OwnedPokemon } from '../../models/pokemon';

export const fetchPokemons = async (newParams: ListParams = InitialListParamsValue) => {
  const response = await getPokemons(newParams);
  
  return {
    type: GET_LIST,
    data: {
      items: response.data.results,
      meta: {
        count: response.data.count,
        nextUrl: response.data.next,
        prevUrl: response.data.previous,
      }
    }
  };
};

export const fetchPokemonDetail = async (name: string = '') => {
  const response = await getPokemonDetail(name);
  
  return {
    type: GET_DETAIL,
    data: {
      id: response.data.id,
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      imageUrl: response.data.sprites.front_default,
      baseExp: response.data.base_experience,
    },
  };
};

export const setOwnedPokemon = (pokemon: OwnedPokemon) => ({
  type: SET_OWNED,
  data: pokemon
});

export const removeOwnedPokemon = (id: number) => ({
  type: REMOVE_OWNED,
  data: id
});

