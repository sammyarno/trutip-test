import { createStore, applyMiddleware, combineReducers } from 'redux';
import type { Middleware } from 'redux';
import thunk from 'redux-thunk';

import PokemonReducer from './pokemon/reducer';
import { ReduxStore } from '../models/store';

const middlewares: Middleware[] = [
  thunk,
];

const rootReducer = (): any => combineReducers({
  pokemon: PokemonReducer,
});

const initialStore: ReduxStore = {
  pokemon: {
    ownedPokemons: [],
    pokemonList: {
      items: [],
      selected: null,
      meta: {
        count: 0,
        nextUrl: '',
        prevUrl: '',
      }
    }
  },
};

const store = createStore(
  rootReducer(),
  initialStore,
  applyMiddleware(...middlewares)
);

export const dispatch = store.dispatch;

export default store;
