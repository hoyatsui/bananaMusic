import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// create a new API using createApi
export const shazamCoreApi = createApi({
  // create a unique id for this API
  reducerPath: 'shazamCoreApi',
  // the baseQeury is the function that will be called when we use the generated hooks
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RAPIDAPI-KEY', '');
      return headers;
    },
  }),
  // the endpoints is the object that contains all the endpoints we want to create. It accepts a function that receives an endpoint builder object as an argument. This object contains all the methods we need to create our endpoints.
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
