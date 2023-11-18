"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}
const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action) => {
            // console.log("action : ", action.payload);
            state.status = true;
            state.userData = action.payload;
        },
        authlogout : (state) => {
            state.status = false;
            state.userData = null;
        },
    },
});

export const { login, authlogout } = authSlice.actions;
export default authSlice.reducer;