import { PokemonItem } from "./pokemon";

export interface ListParams {
  limit: number;
  offset: number;
}

export interface ListResponseData {
  loading: boolean;
  data: {
    items: PokemonItem[];
    meta: {
      count: number;
      nextUrl: string;
      prevUrl: string;
    }
  };
  error: unknown;
}