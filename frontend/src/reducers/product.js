<<<<<<< HEAD
// product reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  product: { reviews: [] },
  loading: false,
  success: false,
  error: null,
  page: null,
  pages: null,
}
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //list products : []
    //prd detail : product: { reviews: [] }
    // prd delet
    //prd create
    //prd update
    //create review in product
    // prd top rated
  },
})

export const product = productSlice.reducer
=======
// create product reducer
>>>>>>> c13a70f (new idea for redux)
