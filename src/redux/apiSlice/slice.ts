import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
     reducerPath: 'api',
     baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
     endpoints: (builder) => ({
          getInfo: builder.query({
               query: (limit: number = 10) => {
                    return {
                         url: `todos?_limit=${limit}`,
                         method: 'GET',
                    }
               },
          }),
     })
})

export const { useGetInfoQuery } = apiSlice
