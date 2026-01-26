import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeScreen from './components/HomeScreen'
import PrdListScreen from './components/productsUi/PrdListScreen'
import PrdUpdateScreen from './components/productsUi/PrdUpdateScreen'
import PrdDetail from './components/productsUi/PrdDetail'
import UserLogin from './components/usersUi/UserLogin'
import UserRegister from './components/usersUi/UserRegister'
import Profile from './components/usersUi/Profile'
import UserUpdate from './components/usersUi/UserUpdate'
import UsersList from './components/usersUi/UsersList'
import OrderList from './components/ordersUi/OrderList'
import OrderById from './components/ordersUi/OderById'
import Cart from './components/paymentUI/Cart'
import Shipping from './components/paymentUI/Shipping'
import Payment from './components/paymentUI/Payment'
import PlaceOrder from './components/paymentUI/PlaceOrder'
import Navbar from './Layout/Navbar'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/admin/ListPrd" element={<PrdListScreen />} />
          <Route path="/admin/UpdatePrd" element={<PrdUpdateScreen />} />
          <Route exact path="/Prdbyid" element={<PrdDetail />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/admin/ListUser" element={<UsersList />} />
          <Route
            path="/admin/user/parmsid/editeUser"
            element={<UserUpdate />}
          />

          <Route path="/admin/ListOrder" element={<OrderList />} />
          <Route path="/admin/Order/:id" element={<OrderById />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
