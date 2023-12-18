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
    createProject: builder.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
  }),
});
export const { useGetProjectsQuery, useCreateProjectMutation } = projectApi;
