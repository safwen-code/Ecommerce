<<<<<<< HEAD
// cart reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  shippingAddress: {},
  paymentMethod: '',
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
  },
})
export const cart = cartSlice.reducer
<<<<<<< HEAD
=======
=======
// create cart reducer
>>>>>>> frontend-ui
>>>>>>> frontend
