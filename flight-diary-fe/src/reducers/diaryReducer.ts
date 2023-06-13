import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy',
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

const initialState: DiaryEntry[] = []

const diarySlice = createSlice({
  name: 'diaries',
  initialState,
  reducers: {
    setDiaries(state, action: PayloadAction<DiaryEntry[]>) {
      state = action.payload 
      console.log('hihi', state);
      return state
     
    },
    appendDiary(state, action: PayloadAction<DiaryEntry>) { //
      state.push(action.payload)
    }
  }
})

// export const initializeDiaries = () => {
//   return async dispatch => {
//     const diaries = await diaryService.getDiaries()
//     dispatch(setDiaries(diaries))
//   }
// }
// export const addDiary = (obj) => {
//   return async dispatch => {
//     const newDiary = await diaryService.createDiary(obj)
//     dispatch(appendDiary(newDiary))
//   }
// }
// export const getDiary = (id) => {
//   return async dispatch => {
//     const diary = await diaryService.findDiary(id)
//     dispatch(setDiaries([diary]))
//   }
// }

export const {
  setDiaries,
  appendDiary
} = diarySlice.actions

export default diarySlice.reducer
