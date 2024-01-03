import api from "../api/api";

const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Projects"],
    }),
    createProject: builder.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["Projects"],
    }),
  }),
});
export const { useGetProjectsQuery, useCreateProjectMutation } = projectApi;
