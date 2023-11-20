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
    profile: builder.mutation({
      query: () => ({
        url: "/auth/varifyLogin",
        method: "POST",
        credentials: "include",
        body: {},
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        credentials: "include",
        body: {},
      }),
    }),
  }),
});
export const {
  useSignupMutation,
  useLoginMutation,
  useProfileMutation,
  useLogoutMutation,
} = authApi;
