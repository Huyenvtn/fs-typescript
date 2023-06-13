import { useState } from 'react'
import { NewDiaryEntry, Visibility, Weather } from './reducers/diaryReducer'

interface FormProps {
  createDiary: (diary: NewDiaryEntry) => void
}

const AddNewForm = ({ createDiary }: FormProps) => {
  const [date, setDate] = useState('')
  const [inputVisibility, setVisibility] = useState('')
  const [inputWeather, setWeather] = useState('')
  const [comment, setComment] = useState('')
  const handleSubmit = () => {
    const visibility: Visibility = inputVisibility as Visibility
    const weather: Weather = inputWeather as Weather
    createDiary({ date, visibility, weather, comment })
  }
  return (
    <>
      <h2>Add new entry</h2>
      <form onSubmit={handleSubmit}>
        <p style={{color: 'red'}}>error here</p>
        <div>
          date
          <input
            value={date}
            onChange={({target}) => setDate(target.value)}
            id='date'
            placeholder='input date of flight'
            type='date'
          />
        </div>
        <div
          id='visibility'
          placeholder='input visibility of flight'
        >visibility&emsp;
          <input type="radio" value="great" checked={inputVisibility === "great"} onChange={({target}) => setVisibility(target.value)}/>
          <label>great</label>&emsp;
          <input type="radio" value="good" checked={inputVisibility === "good"} onChange={({target}) => setVisibility(target.value)} />
          <label>good</label>&emsp;
          <input type="radio"value="ok" checked={inputVisibility === "ok"} onChange={({target}) => setVisibility(target.value)} />
          <label>ok</label>&emsp;
          <input type="radio"value="poor" checked={inputVisibility === "poor"} onChange={({target}) => setVisibility(target.value)} />
          <label>poor</label>
        </div>
        <div
          id='weather'
          placeholder='input weather of flight'
        >weather&emsp;
          <input type="radio" value="sunny" checked={inputWeather === "sunny"} onChange={({target}) => setWeather(target.value)}/>
          <label>sunny</label>&emsp;
          <input type="radio" value="rainy" checked={inputWeather === "rainy"} onChange={({target}) => setWeather(target.value)} />
          <label>rainy</label>&emsp;
          <input type="radio" value="cloudy" checked={inputWeather === "cloudy"} onChange={({target}) => setWeather(target.value)} />
          <label>cloudy</label>&emsp;
          <input type="radio" value="stormy" checked={inputWeather === "stormy"} onChange={({target}) => setWeather(target.value)} />
          <label>stormy</label>&emsp;
          <input type="radio" value="windy" checked={inputWeather === "windy"} onChange={({target}) => setWeather(target.value)} />
          <label>windy</label>
        </div>
        <div>
          comment
          <input
            value={comment}
            onChange={({target}) => setComment(target.value)}
            id='comment'
            placeholder='input comment of flight'
          />
        </div>
        <button id='create-button' type='submit'> add </button>
      </form>

    </>
  )
}
export default AddNewForm