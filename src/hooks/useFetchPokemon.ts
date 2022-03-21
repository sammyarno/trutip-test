import { useCallback, useEffect, useState } from 'react';
import { DetailResponseData } from '../models/network';
import { getPokemonDetail } from '../utils/api';
import { InitialDetailResponseValue } from '../utils/constants';

const useFetchPokemon = (name: string = '') => {
  const [result, setResult] = useState<DetailResponseData>(InitialDetailResponseValue);

  const fetchPokemons = useCallback(
    async () => {
      setResult(prev => ({
        ...prev,
        loading: true,
      }));

      const response = await getPokemonDetail(name);
      
      if (response.status === 200) {
        setResult(prev => {
          return ({
            ...prev,
            data: {
              id: response.data.id,
              name: response.data.name,
              height: response.data.height,
              weight: response.data.weight,
              imageUrl: response.data.sprites.front_default,
              baseExp: response.data.base_experience,
            },
          })
        });
      } else {
        setResult(prev => ({
          ...prev,
          error: response.data,
        }));
      }

      setResult(prev => ({
        ...prev,
        loading: false,
      }));
    }, [name]
  );

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return result;
};

export default useFetchPokemon;
