import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../../services/api'

interface State {
  fields: any
}

const initialState: State = {
  fields: {}
}

export const getProducts = createAsyncThunk('paywall/getProducts', async () => {
  console.log('chegou')

  const response = await api.get('/shopify/products')
  console.log(response)

  return response
})

const paywallSlice = createSlice({
  name: 'paywall',
  initialState,
  reducers: {
    setFieldsValues: (state, action) => {
      state.fields = action.payload
    },

    reset: () => initialState
  }
})

export const { setFieldsValues, reset } = paywallSlice.actions

export default paywallSlice.reducer
