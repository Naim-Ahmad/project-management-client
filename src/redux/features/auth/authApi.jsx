import api from "../api/api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
  }),
});
export const { useSignupMutation, useLoginMutation } = authApi;
