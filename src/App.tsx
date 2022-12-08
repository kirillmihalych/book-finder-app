import { FC, useState } from 'react'
import AllBookPage from './components/AllBookPage'

const App: FC = () => {
  const [query, setQuery] = useState<string>('tolkien')
  const [temp, setTemp] = useState<string>('')

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuery(temp)
  }

  const queryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemp(e.target.value)
  }

  return (
    <div>
      <section className='search-form-section'>
        <form className='search-form' onSubmit={submitHandler}>
          <input value={temp} onChange={queryHandler} type='text' />
        </form>
      </section>
      <div>
        <AllBookPage query={query} />
      </div>
    </div>
  )
}

export default App
