import HomeScreen from './components/HomeScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrdListScreen from './components/productsUi/PrdListScreen'
import PrdUpdateScreen from './components/productsUi/PrdUpdateScreen'
import PrdDetail from './components/productsUi/prdDetail'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/ListPrd" element={<PrdListScreen />} />
          <Route exact path="/UpdatePrd" element={<PrdUpdateScreen />} />
          <Route exact path="/Prdbyid" element={<PrdDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
