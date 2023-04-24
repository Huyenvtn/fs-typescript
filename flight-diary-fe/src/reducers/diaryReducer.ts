import { createSlice } from '@reduxjs/toolkit'
import diaryService from '../services/diaryService'

const diarySlice = createSlice({
  name: 'diaries',
  initialState: [],
  reducers: {
    setDiaries(state, action) {
      return action.payload
    },
    appendDiary(state, action) {
      return state.push(action.payload)
    }
  }
})

export const initializeDiaries = () => {
  return async dispatch => {
    const diaries = await diaryService.getDiaries()
    dispatch(setDiaries(diaries))
  }
}
export const addDiary = (obj) => {
  return async dispatch => {
    const newDiary = await diaryService.createDiary(obj)
    dispatch(appendDiary(newDiary))
  }
}
export const getDiary = (id) => {
  return async dispatch => {
    const diary = await diaryService.findDiary(id)
    dispatch(setDiaries([diary]))
  }
}

export const {
  setDiaries,
  appendDiary
} = diarySlice.actions

export default diarySlice.reducer