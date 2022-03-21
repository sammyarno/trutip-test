import { ListParams, ListResponseData } from '../models/network';

export const DATA_PER_PAGE=10;

export const InitialListParamsValue: ListParams = {
  limit: 10,
  offset: 0
};

export const InitialResponseValue: ListResponseData = {
  loading: false,
  data: {
    items: [],
    meta: {
      count: 0,
      nextUrl: '',
      prevUrl: '',
    }
  },
  error: null,
};
