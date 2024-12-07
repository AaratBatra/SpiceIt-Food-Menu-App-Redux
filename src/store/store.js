import { configureStore } from "@reduxjs/toolkit";
import foodMenuSliceReducer from "./slices/FoodMenuSlice";
export const store = configureStore({
    reducer: {
        foodMenu: foodMenuSliceReducer
    }
})
