import type { Action } from 'redux';
import type { OwnedPokemon, Pokemon } from '../../models/pokemon';
import type { PokemonList } from '../../models/store';

export const A = '@@pokemon/A';
export const GET_LIST = '@@pokemon/GET_LIST';
export const GET_DETAIL = '@@pokemon/GET_DETAIL';
export const SET_OWNED = '@@pokemon/SET_OWNED';
export const REMOVE_OWNED = '@@pokemon/REMOVE_OWNED';

interface GetListAction extends Action {
  type: typeof GET_LIST;
  data: PokemonList;
}

interface GetDetailAction extends Action {
  type: typeof GET_DETAIL;
  data: Pokemon;
}

interface SetOwnedAction extends Action {
  type: typeof SET_OWNED;
  data: OwnedPokemon;
}

interface RemoveOwnedAction extends Action {
  type: typeof REMOVE_OWNED;
  data: number;
}

interface AAction extends Action {
  type: typeof A;
}

export type PokemonActions = AAction | GetListAction | GetDetailAction | SetOwnedAction | RemoveOwnedAction;
