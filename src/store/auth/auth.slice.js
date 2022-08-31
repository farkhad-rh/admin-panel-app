import { createSlice } from '@reduxjs/toolkit'
import { login, logout, refresh } from './auth.service'

const initialState = {
  auth: false,
  user: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(login.matchFulfilled, (state, { payload }) => {
      state.auth = true
      state.user = payload
      state.token = payload.token
    }),
      builder.addMatcher(logout.matchFulfilled, state => {
        state.auth = false
        state.user = null
        state.token = null
      }),
      builder.addMatcher(refresh.matchFulfilled, (state, { payload }) => {
        state.auth = true
        state.user = payload
        state.token = payload.token
      })
  },
})
