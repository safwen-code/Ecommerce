import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeScreen from './components/HomeScreen'
import { PrdListScreen } from './components/productsUi/PrdListScreen'
import { PrdUpdateScreen } from './components/productsUi/PrdUpdateScreen'
import { PrdDetail } from './components/productsUi/PrdDetail'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />

          <Route exact path="/ListPrd" element={<PrdListScreen />} />
          <Route exact path="/UpdatePrd" element={<PrdUpdateScreen />} />
          <Route exact path="/Prdbyid" element={<PrdDetail />} />

          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin/ListUser" element={<UsersList />} />
          <Route
            path="/admin/user/parmsid/editeUser"
            element={<UserUpdate />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
