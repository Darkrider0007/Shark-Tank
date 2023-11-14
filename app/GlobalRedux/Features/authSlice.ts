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
            state.status = true;
            state.userData = action.payload.user;
        },
        authlogout : (state) => {
            state.status = false;
            state.userData = null;
        },
    },
});

export const { login, authlogout } = authSlice.actions;
export default authSlice.reducer;