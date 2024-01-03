import api from "../api/api";

const taskApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
    getTaskById: builder.query({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateTaskMutation, useGetTaskByIdQuery } = taskApi;
