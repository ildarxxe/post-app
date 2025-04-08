import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    users: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeLoggedIn: (state, action) => {
            state.isLogged = action.payload;
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
    },
})

export const { changeLoggedIn, setUserInfo, setUsers } = userSlice.actions;
export default userSlice.reducer;