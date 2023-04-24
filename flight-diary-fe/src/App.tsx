import { connect } from 'react-redux'
import { initializeDiaries } from './reducers/diaryReducer'
import { useEffect } from 'react'

const App = props => {
  useEffect(()=> {
    props.initializeDiaries()
  }, [])
  return (
    <>{props.diaries}</>
  )
}

const mapStateToProps = state => {
  return {
    diaries: state.diaries
  }
}

const mapDispatchToProps = {
  initializeDiaries
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
