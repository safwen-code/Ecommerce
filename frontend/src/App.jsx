import HomeScreen from './components/HomeScreen'
import { Router, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" element={<HomeScreen />} />
      </Router>
    </>
  )
}

export default App
