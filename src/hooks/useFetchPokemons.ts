import { useCallback, useEffect, useState } from 'react';
import { ListParams, ListResponseData } from '../models/network';
import { getPokemons } from '../utils/api';
import { InitialListParamsValue, InitialResponseValue } from '../utils/constants';

const useFetchPokemons = () => {
  const [result, setResult] = useState<ListResponseData>(InitialResponseValue);

  const fetchPokemons = useCallback(
    async (newParams: ListParams = InitialListParamsValue) => {
      setResult(prev => ({
        ...prev,
        loading: true,
      }));

      const response = await getPokemons(newParams);
      
      if (response.status === 200) {
        setResult(prev => {
          return ({
            ...prev,
            data: {
              items: response.data.results,
              meta: {
                count: response.data.count,
                nextUrl: response.data.next,
                prevUrl: response.data.previous,
              }
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
    }, []
  );

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...result, refetch: fetchPokemons };
};

export default useFetchPokemons;
