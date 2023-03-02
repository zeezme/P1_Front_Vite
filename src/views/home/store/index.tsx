import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../../services/api'
interface Products {
  [key: string]: any
}
interface State {
  fields: Products
}

const initialState: State = {
  fields: []
}

export const getProducts: any = createAsyncThunk(
  'paywall/getProducts',
  async () => {
    const response = await api.get('/shopify/products')
    return response.data
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setFieldsValues: (state, action) => {
      state.fields = action.payload
    },

    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.fields = action.payload
    })
  }
})

export const { setFieldsValues, reset } = homeSlice.actions

export default homeSlice.reducer
