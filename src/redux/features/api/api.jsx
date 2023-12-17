import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const env = import.meta.env

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
<<<<<<<<< Temporary merge branch 1
    // baseUrl: "https://project-management-server-seven.vercel.app",
    baseUrl: "http://localhost:3000",
=========
    baseUrl: env.VITE_BASE_URL,
>>>>>>>>> Temporary merge branch 2
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      return headers;
    },
  }),

  endpoints: () => ({}),
  keepUnusedDataFor: 120,
  tagTypes: ["Employees"],
});

export default api;
