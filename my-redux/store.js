import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import UsersReducer from '@my-redux/usersSlice'

const rootReducer = combineReducers({
  users: UsersReducer
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export const wrapper = createWrapper(setupStore)
