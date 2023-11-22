import api from "../api/api";

const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => ({
        url: "/employee",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetEmployeesQuery } = dashboardApi;
