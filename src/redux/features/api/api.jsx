import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const env = import.meta.env

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
<<<<<<< HEAD
    // baseUrl: "https://project-management-server-seven.vercel.app",
    baseUrl: "http://localhost:3000",
=======
    baseUrl: env.VITE_BASE_URL,
>>>>>>> 4d13769af67ac6025f6296d73373b5a98156cf5e
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
