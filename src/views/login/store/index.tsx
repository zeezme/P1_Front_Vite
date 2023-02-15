import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface User {
  [key: string]: any
}

interface Fields {
  [key: string]: string
}

interface State {
  fields: Fields
  login: boolean
  user: User
}

const initialState: State = {
  fields: {
    email: '',
    password: ''
  },
  login: false,
  user: {}
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setFieldsValues: (state, action) => {
      state.fields[action.payload.field] = action.payload.value
    },
    setUser: (state, action) => {
      state.login = true
      state.user = action.payload
    },
    reset: () => initialState
  }
})

export const { setFieldsValues, setUser, reset } = loginSlice.actions

export default loginSlice.reducer
