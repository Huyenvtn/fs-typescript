import { useSelector /*, useDispatch /*, connect */} from 'react-redux'
import { RootState } from './store/store'
// import { setDiaries, appendDiary } from './reducers/diaryReducer'
import { initializeDiaries } from './reducers/diaryReducer'
// import { useEffect } from 'react'

const App = () => {
  const diaries = useSelector((state: RootState) => state.diaries);
  // const dispatch = useDispatch();
  initializeDiaries()
  // dispatch(appendDiary({}));
  // useEffect(()=> {
  // }, [])
  return (
    <>{diaries}</>
  )
}

export default App;
