import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/productSlice.js'
const store =configureStore({
    reducer:{
        products:productReducer
    }
})
export default store