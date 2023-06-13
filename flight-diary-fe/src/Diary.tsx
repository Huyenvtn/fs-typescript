import { DiaryEntry } from './reducers/diaryReducer'

const Diary = (props: DiaryEntry) => {
  return (<>
    <b>{props.date}</b>
    <br />
    <p>visibility: {props.visibility}</p>
    <p>weather: {props.weather}</p>
    <br />
  </>)
}
export default Diary