import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit"
import { getUserList } from "@services/api"
const initialState = {
  entities: [],
  ids: [],
  loaded: false,
  fetching: false,
  error: ""
}
export const fetchUsers = createAsyncThunk("users/fetchUsers",async (id=0) => await getUserList(id))

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.entities = action.payload
        state.ids = action.payload.map(o=>o.id)
        state.loaded = true
        state.fetching = false
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loaded = false
        state.fetching = true
      })
      .addCase(fetchUsers.rejected, (state, { error }) => {
        state.loaded = false
        state.fetching = false
        state.error = error.message
      })
  },
})

export const selectAllUsers = (state) => state.users
