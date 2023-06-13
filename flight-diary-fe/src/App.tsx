import { useSelector , useDispatch } from 'react-redux'
import { RootState } from './store/store'
import { setDiaries, appendDiary, NewDiaryEntry } from './reducers/diaryReducer'
import diaryService from './services/diaryService'
import { useEffect } from 'react'
import Diary from './Diary'
import AddNewForm from './AddNewForm'

const App = () => {
  const diariesList = useSelector((state: RootState) => state.diaries);
  const dispatch = useDispatch();
  const createDiary = async (obj: NewDiaryEntry) => {
    const newDiary = await diaryService.createDiary(obj)
    dispatch(appendDiary(newDiary));
  }

  useEffect(()=> {
    const fetchDiaryList = async () => {
      const diaries = await diaryService.getDiaries()
      dispatch(setDiaries(diaries));
    }
    fetchDiaryList()
  }, [dispatch])
  
  return (
    <>
      <AddNewForm createDiary={createDiary} />
      <h2>Diary entries</h2>
      {diariesList.map(item => {
        return <Diary key={item.id} id={item.id} date={item.date} visibility={item.visibility} weather={item.weather} comment={item.comment} />
      })}
    </>
  )
}

export default App;
