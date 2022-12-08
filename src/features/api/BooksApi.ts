import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IBook, IBooks } from '../../models/IBook'

export const booksAPI = createApi({
  reducerPath: 'booksAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books',
  }),
  endpoints: (build) => ({
    fetchBooks: build.query<IBook[], string>({
      query: (name) => `/v1/volumes?q=${name}`,
      transformResponse: (responseData: IBooks) => {
        return responseData.items
      },
    }),
  }),
})

export const { useFetchBooksQuery } = booksAPI
