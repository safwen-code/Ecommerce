import { configureStore } from '@reduxjs/toolkit'
import { user } from './reducers/user.js'
import { product } from './reducers/product.js'
import { order } from './reducers/order.js'
import { cart } from './reducers/cart.js'

const store = configureStore({
  reducer: {
    user,
    product,
    order,
    cart,
  },
})
export default store
