import axios from 'axios'
import { DiaryEntry, NewDiaryEntry } from '../reducers/diaryReducer'
const baseUrl = 'http://localhost:3000/api/diaries'

// interface ValidationError {
//   message: string
//   errors: Record<string, string[]>
// }

const getDiaries = async () => {
  const res = await axios.get<DiaryEntry[]>(baseUrl)
  return res.data
}

const findDiary = async (id: unknown) => {
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}

const createDiary = async (object: NewDiaryEntry) => {
  // try {
    const res = await axios.post<DiaryEntry>(baseUrl, object)
    return res.data
  // } catch (e) {
  //   if (axios.isAxiosError<ValidationError, Record<string, unknown>>(e)) {
  //     console.log(e.status)
  //     console.error(e.response)
  //   } else {
  //     console.error(e)
  //   }
  // }
}

export default { getDiaries, findDiary, createDiary }