import { createContext, ReactNode, useContext, useState } from "react";
import { OwnedPokemon } from "../models/pokemon";

interface PokemonContextData {
  ownedPokemons: OwnedPokemon[];
  addOwnedPokemons: (pokemon: OwnedPokemon) => void;
  removeOwnedPokemon: (pokemonId: number) => void;
};

const initialState: PokemonContextData = {
  ownedPokemons: [],
  addOwnedPokemons: () => {},
  removeOwnedPokemon: () => {},
};

export const PokemonContext = createContext<PokemonContextData>(initialState);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [ownedPokemons, setOwnedPokemons] = useState<OwnedPokemon[]>([]);

  const handleSetOwnedPokemons = (pokemon: OwnedPokemon) => {
    setOwnedPokemons(prev => prev.concat(pokemon));
  };

  const handleRemovePokemon = (pokemonId: number) => {
    setOwnedPokemons(prev => prev.filter((x: OwnedPokemon) => x.id !== pokemonId));
  }

  return (
    <PokemonContext.Provider 
      value={{ 
        ownedPokemons, 
        addOwnedPokemons: handleSetOwnedPokemons,
        removeOwnedPokemon: handleRemovePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};
