import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IBook } from '../../models/IBook'

export const booksAPI = createApi({
  reducerPath: 'booksAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books',
  }),
  endpoints: (build) => ({
    fetchBooks: build.query<IBook[], string>({
      query: (name) => `/v1/volumes?q=${name}`,
    }),
  }),
})

export const { useFetchBooksQuery } = booksAPI
