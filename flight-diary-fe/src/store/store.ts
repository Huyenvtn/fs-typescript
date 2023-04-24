import { configureStore } from '@reduxjs/toolkit'
import diaryReducer from '../reducers/diaryReducer'

const store = configureStore({
  reducer: {
    diaries: diaryReducer
  }
})

export default store