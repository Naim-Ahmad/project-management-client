import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://project-management-server-seven.vercel.app",
    baseUrl: "http://localhost:3000",
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
