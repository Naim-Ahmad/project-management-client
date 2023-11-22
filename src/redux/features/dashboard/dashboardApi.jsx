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
    updateEmployee: builder.mutation({
      query: ({ _id, updatedData }) => ({
        url: `/employee/${_id}`,
        method: "PATCH",
        credentials: "include",
        body: updatedData,
      }),
      // passimistik cach update
      async onQueryStarted(
        { _id, updatedData },
        { queryFulfilled, dispatch, getState }
      ) {
        try {
          const { data } = await queryFulfilled;
          if (data?.modifiedCount == 1) {
            dispatch(
              api.util.updateQueryData(
                "getEmployees",
                getState().dashboard.query,
                (draft) => {
                  const prevData = draft?.users?.find(
                    (user) => user._id == _id
                  );
                  Object.assign(prevData, updatedData);
                }
              )
            );
          }
        } catch {
          console.log("error");
        }
      },
    }),
  }),
});

export const { useGetEmployeesQuery, useUpdateEmployeeMutation } = dashboardApi;
