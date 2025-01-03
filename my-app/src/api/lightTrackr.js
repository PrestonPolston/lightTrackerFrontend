import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const lightApi = createApi({
  reducerPath: "lightApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/auth/users",
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/users/login",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useGetUserQuery, useLoginUserMutation } = lightApi;
