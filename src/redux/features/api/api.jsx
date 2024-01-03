import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const env = import.meta.env

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      return headers;
    },
  }),

  endpoints: () => ({}),
  keepUnusedDataFor: 120,
  tagTypes: ["Employees","Projects"],
});

export default api;
