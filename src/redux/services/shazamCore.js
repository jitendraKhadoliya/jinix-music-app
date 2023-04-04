// ! create reducerSlice to fetch data from api
// * here I am following the redux toolkit api service from their documentation

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        // "X-RapidAPI-Key",
        // "9bc77343fbmsh484d6da408e357fp189298jsn5a23f55737bc"
        "X-RapidAPI-Key",
        "9bc77343fbmsh484d6da408e357fp189298jsn5a23f55737bc"
        // "X-RapidAPI-Host",
        // "shazam.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/track" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "9bc77343fbmsh484d6da408e357fp189298jsn5a23f55737bc",
//     "X-RapidAPI-Host": "shazam.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://shazam.p.rapidapi.com/shazam-songs/get-details?id=40333609",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
