import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3333" }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "/categories/all",
    }),
    getCategoryById: builder.query({
      query: (id) => `/categories/${id}`,
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetCategoryByIdQuery } =
  categoryApi;
