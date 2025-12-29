<<<<<<< HEAD
// user reducer

//loginuser  : userInfo
//registerUser : userInfo
// userDetail : user
// userUpdate: userInfo
// listUser: users
// userUodate :user

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: {},
  user: {},
  users: [],
  loading: false,
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
  },
})

export const user = userSlice.reducer
=======
// create user reducer
>>>>>>> c13a70f (new idea for redux)
