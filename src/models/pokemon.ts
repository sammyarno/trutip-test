export interface PokemonItem {
  name: string; 
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  baseExp: number;
  height: number;
  weight: number;
  imageUrl: string;
}

export interface OwnedPokemon {
  id: number;
  name: string;
  nickname: string;
  imageUrl: string;
}
