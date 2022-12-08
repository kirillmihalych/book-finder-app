import { FC, useEffect } from 'react'
import { useFetchBooksQuery } from '../features/api/BooksApi'
import { IBook } from '../models/IBook'

const AllBookPage: FC = () => {
  const { data: books } = useFetchBooksQuery('tolkien')

  console.log(books)

  return <div>AllBookPage</div>
}

export default AllBookPage
