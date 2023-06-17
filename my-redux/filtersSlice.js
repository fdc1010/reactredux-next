import { createSlice } from '@reduxjs/toolkit'

export const LoadedFilters = {
  All: null,
  Active: false,
  Completed: true,
}

const initialState = {
  loaded: !!LoadedFilters.All,
  list: [],
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    loadedFilterChanged(state, action) {
      state.loaded = action.payload
    },
    userFilterChanged: {
      reducer(state, action) {
        let { user, changeType } = action.payload
        const { list } = state
        switch (changeType) {
          case 'added': {
            if (!list.map(o=>o.id).includes(user.id)) {
              list.push(user)
            }
            break
          }
          case 'removed': {
            state.list = list.filter(
              (existingUser) => existingUser !== user
            )
          }
          default:
            return
        }
      },
      prepare(user, changeType) {
        return {
          payload: { user, changeType },
        }
      },
    },
  },
})

export const { userFilterChanged, loadedFilterChanged } = filtersSlice.actions

export default filtersSlice.reducer
