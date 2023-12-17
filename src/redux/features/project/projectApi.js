import api from "../api/api";

const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});
export const { useGetProjectsQuery } = projectApi;
