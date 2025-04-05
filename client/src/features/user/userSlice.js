import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null
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
    },
})

export const { changeLoggedIn, setUserInfo } = userSlice.actions;
export default userSlice.reducer;