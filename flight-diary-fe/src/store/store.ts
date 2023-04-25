import { configureStore } from '@reduxjs/toolkit'
import diaryReducer from '../reducers/diaryReducer'

export const store = configureStore({
  reducer: {
    diaries: diaryReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch