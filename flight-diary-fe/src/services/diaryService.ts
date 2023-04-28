import axios from 'axios'
import { DiaryState, NewDiaryEntry } from '../reducers/diaryReducer'
const baseUrl = 'http://localhost:3000/api/diaries'

const getDiaries = async () => {
  const res = await axios.get<DiaryState[]>(baseUrl)
  return res.data
}

const findDiary = async (id: unknown) => {
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}

const createDiary = async (object: NewDiaryEntry) => {
  const res = await axios.post(baseUrl, object)
  return res.data
}

export default { getDiaries, findDiary, createDiary }