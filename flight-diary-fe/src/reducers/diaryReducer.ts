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
      return state
     
    },
    appendDiary(state, action: PayloadAction<DiaryEntry>) { //
      state.push(action.payload)
    }
  }
})

export const {
  setDiaries,
  appendDiary
} = diarySlice.actions

export default diarySlice.reducer
