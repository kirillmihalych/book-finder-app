import { FC } from 'react'
import { useFetchBooksQuery } from '../features/api/BooksApi'
import { IBook } from '../models/IBook'

interface AllBookPageProps {
  query: string
}

const AllBookPage: FC<AllBookPageProps> = ({ query }) => {
  console.log(query)
  const { data: books = [], isLoading, isError } = useFetchBooksQuery(query)

  if (isLoading) {
    return <h2>is loading</h2>
  }

  if (isError) {
    return <h2>there is and error</h2>
  }

  return (
    <section>
      {books.map((book: IBook) => {
        const { title, description } = book.volumeInfo
        const img = book.volumeInfo.imageLinks.thumbnail
        const { authors = [] } = book.volumeInfo

        return (
          <article key={book.id}>
            <h2>
              {title} by
              {authors.map((author: string) => ' ' + author)}
            </h2>
            <a href={book.volumeInfo.previewLink}>GBooks link</a>
            <p>{description}</p>
            <img src={img} alt={title} />
          </article>
        )
      })}
    </section>
  )
}

export default AllBookPage
