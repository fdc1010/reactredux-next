import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { usersSlice } from './usersSlice'

export const makeStore = () => configureStore({
  reducer: {
    users: usersSlice.reducer
  }
})

export const wrapper = createWrapper(makeStore)
