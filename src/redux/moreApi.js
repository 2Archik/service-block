import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moreApi = createApi({
  reducerPath: "moreApi",
  tagTypes: ["More details"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    getMore: build.query({
      query: () => "more",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Products", id })),
              { type: "Products", id: "LIST" },
            ]
          : [{ type: "Products", id: "LIST" }],
    }),
  }),
});

export const { useGetMoreQuery } = moreApi;
