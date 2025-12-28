// order reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  order: {},
  orders: [],
  loading: false,
  success: false,
  error: null,
}
const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // create Order
    // order Details
    // pay Order
    // list Order
    // My List Order
    // Deliver order
  },
})

export const order = orderSlice.reducer
