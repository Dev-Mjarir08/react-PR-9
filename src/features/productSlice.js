import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('product/fetchProducts', async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get('https://dummyjson.com/products')
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            const data = action.payload
            state.products = data.products
        })

    }
})
export default productSlice.reducer