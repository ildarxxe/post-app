import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: null
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setStatePosts: (state, action) => {
            state.posts = action.payload;
        },
    }
})

export const { setStatePosts } = postsSlice.actions;
export default postsSlice.reducer;