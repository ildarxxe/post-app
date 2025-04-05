import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: null,
    userById: null
}

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        setUserById: (state, action) => {
            state.userById = action.payload;
        }
    }
})

export const { setUsers, setUserById } = adminSlice.actions;
export default adminSlice.reducer;