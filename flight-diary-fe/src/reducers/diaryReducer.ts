import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { /*useSelector, */useDispatch /*, connect */} from 'react-redux'
import diaryService from '../services/diaryService'

const dispatch = useDispatch();

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
export interface DiaryState {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type NewDiaryEntry = Omit<DiaryState, 'id'>;

const initialState: DiaryState[] = []

const diarySlice = createSlice({
  name: 'diaries',
  initialState,
  reducers: {
    setDiaries: (state, action: PayloadAction<DiaryState[]>) => {
      state = action.payload
    },
    appendDiary: (state, action: PayloadAction<DiaryState>) => {
      state.push(action.payload)
    }
  }
})

export const initializeDiaries = async () => {
  // const 
  // return async dispatch => {
    const diaries = await diaryService.getDiaries()
    dispatch(setDiaries(diaries))
  // }
}

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