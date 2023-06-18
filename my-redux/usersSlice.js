import _ from 'lodash'
import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit"
import { getUserList } from "@services/api"

const userEntityAdapter = createEntityAdapter({
  entities: [],
  ids: [],
  loaded: false,
  fetching: false,
  error: ""
})
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (id = 0, { rejectWithValue }) => {
    try {
      return await getUserList(id)
    } catch (err) {
      // You can choose to use the message attached to err or write a custom error
      return rejectWithValue(err?.message ?? "Opps there seems to be an error")
    }
  }
)

export const usersSlice = createSlice({
  name: "users",
  initialState: userEntityAdapter.getInitialState(),
  reducers: {
    deleteUser(state, action){
      state.entities = state.entities.filter(o=>o.id !== action.payload)
      state.ids = state.ids.filter(o=>o !== action.payload)
      state.loaded = true
      state.fetching = false
      state.error = ""
    },
    deleteFailed(state, action){
      state.loaded = false
      state.fetching = false
      state.error = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.entities = action.payload
        state.ids = action.payload.map(o=>o.id)
        state.loaded = true
        state.fetching = false
        state.error = ""
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loaded = false
        state.fetching = true
        state.error = ""
      })
      .addCase(fetchUsers.rejected, (state, { error }) => {
        state.loaded = false
        state.fetching = false
        state.error = error.message
      })
  },
})

export const { deleteUser, deleteFailed } = usersSlice.actions
export const selectAllUsers = (state) => state.users
