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
  }),
});

export const { useCreateTaskMutation } = taskApi;
