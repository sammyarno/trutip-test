import type { OwnedPokemon, Pokemon, PokemonItem } from "./pokemon";

export interface ReduxStore {
  pokemon: PokemonState;
}

export interface PokemonState {
  pokemonList: PokemonList;
  ownedPokemons: OwnedPokemon[];
}

export interface PokemonList {
  items: PokemonItem[];
  selected: Pokemon | null;
  meta: {
    count: number;
    nextUrl: string;
    prevUrl: string;
  };
}