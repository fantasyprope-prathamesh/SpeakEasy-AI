import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
    name: "result",
    initialState: " ",
    reducers: {
        updateResult: (state, action) => {
            // Mutate the state directly
            return action.payload;
        }
    }
});

export const { updateResult } = resultSlice.actions;
export const updateResultReducer = resultSlice.reducer;