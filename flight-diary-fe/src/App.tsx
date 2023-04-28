import { useSelector , useDispatch /*, connect */} from 'react-redux'
import { RootState } from './store/store'
import { setDiaries, appendDiary } from './reducers/diaryReducer'
import diaryService from './services/diaryService'
// import { initializeDiaries } from './reducers/diaryReducer'
import { useEffect } from 'react'

const App = () => {
  const diariesL = useSelector((state: RootState) => state.diaries);
  const dispatch = useDispatch();
  // initializeDiaries()
  // console.log(diariesL);
  // dispatch(appendDiary({}));
  useEffect(()=> {
    const fetchDiaryList = async () => {
      const diaries = await diaryService.getDiaries()
      // console.log(diaries);
      dispatch(setDiaries(diaries));
    }
    fetchDiaryList()
  }, [dispatch])
  
  console.log(diariesL);
  return (
    <>Đây nè má {diariesL}</>
  )
}

export default App;
