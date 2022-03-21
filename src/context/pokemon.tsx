import { createContext, ReactNode, useContext, useState } from "react";
import { OwnedPokemon } from "../models/pokemon";

interface PokemonContextData {
  ownedPokemons: OwnedPokemon[];
  updateOwnedPokemons: (pokemon: OwnedPokemon) => void;
};

const initialState: PokemonContextData = {
  ownedPokemons: [],
  updateOwnedPokemons: () => {},
};

export const PokemonContext = createContext<PokemonContextData>(initialState);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [ownedPokemons, setOwnedPokemons] = useState<OwnedPokemon[]>([]);

  const handleSetOwnedPokemons = (pokemon: OwnedPokemon) => {
    setOwnedPokemons(prev => prev.concat(pokemon));
  };

  return (
    <PokemonContext.Provider 
      value={{ 
        ownedPokemons, 
        updateOwnedPokemons: handleSetOwnedPokemons
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};
