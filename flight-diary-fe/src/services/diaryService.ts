import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/diaries'

const getDiaries = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const findDiary = async id => {
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}

const createDiary = async object => {
  const res = await axios.post(baseUrl, object)
  return res.data
}

export default { getDiaries, findDiary, createDiary }