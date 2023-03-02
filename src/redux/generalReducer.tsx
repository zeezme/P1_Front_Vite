import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface State {
  theme: string
}

const initialState: State = {
  theme: 'dark'
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload
    },

    reset: () => initialState
  }
})

export const { updateTheme, reset } = loginSlice.actions

export default loginSlice.reducer
