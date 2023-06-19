import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit"
import { getUserList } from "@services/api"

const userEntityAdapter = createEntityAdapter({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
  error: ""
})
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_,{ rejectWithValue }) => {
    try {
      return await getUserList()
    } catch (err) {
      return rejectWithValue(err?.message ?? "Opps there seems to be an error")
    }
  }
)

export const usersSlice = createSlice({
  name: "users",
  initialState: userEntityAdapter.getInitialState(),
  reducers: {
    userRemove: userEntityAdapter.removeOne
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, userEntityAdapter.setAll)
      .addCase(fetchUsers.rejected, userEntityAdapter.updateOne)
  }
})

export const { userRemove } = usersSlice.actions
export const { selectAll: selectUsers, selectById: selectUserById } = userEntityAdapter.getSelectors(state => state.users)
export const selectUserIds = createSelector(selectUsers, (users) => users.map((user) => user.id))
