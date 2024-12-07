import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    menu: [],
    pagination: {
        currentPage: 0,
        totalPages: 0
    },
    isLoading: false
}

const foodMenuSlice = createSlice({
    name: "foodMenu",
    initialState,
    reducers: {},
    builder: (builder) => {
        builder.addCase
    }
})