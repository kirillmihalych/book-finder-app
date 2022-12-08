import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { booksAPI } from '../features/api/BooksApi'

export const store = configureStore({
  reducer: {
    [booksAPI.reducerPath]: booksAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(booksAPI.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
