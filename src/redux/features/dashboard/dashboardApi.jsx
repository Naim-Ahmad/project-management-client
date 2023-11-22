import api from "../api/api";

const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: (query) => ({
        url: `/employee${query}`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetEmployeesQuery } = dashboardApi;
