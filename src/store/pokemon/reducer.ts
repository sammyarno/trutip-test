import { GET_DETAIL, GET_LIST, SET_OWNED, REMOVE_OWNED } from './types';
import type { PokemonActions } from './types';
import type { PokemonState } from '../../models/store';

const initialData: PokemonState = {
  pokemonList: {
    items: [],
    selected: null,
    meta: {
      count: 0,
      nextUrl: '',
      prevUrl: '',
    }
  },
  ownedPokemons: [],
};

const pokemonReducer = (
  state = initialData,
  action: PokemonActions
): PokemonState => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        pokemonList: action.data,
      };
    case GET_DETAIL:
      return {
        ...state,
        pokemonList: {
          ...state.pokemonList,
          selected: action.data,
        },
      };
    case SET_OWNED:
      return {
        ...state,
        ownedPokemons: state.ownedPokemons.concat(action.data),
      };
    case REMOVE_OWNED:
      return {
        ...state,
        ownedPokemons: state.ownedPokemons.filter(x => x.id !== action.data),
      };
    default:
      return state;
  }
};

export default pokemonReducer;
