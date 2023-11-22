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
            // first update
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
    deleteEmployee: builder.mutation({
      query: (_id) => ({
        url: `/employee/${_id}`,
        method: "DELETE",
        credentials: "include",
      }),
      // passimistik cach update
      async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.deletedCount == 1) {
            dispatch(
              api.util.updateQueryData(
                "getEmployees",
                getState().dashboard.query,
                (draft) => {
                  const oldData = draft?.users;
                  const index = oldData.findIndex((user) => user._id == arg);
                  if (index != -1) {
                    oldData.splice(index, 1);
                  }
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

export const {
  useGetEmployeesQuery,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = dashboardApi;
