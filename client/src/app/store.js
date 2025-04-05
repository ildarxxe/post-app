import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice.js';
import userReducer from '../features/user/userSlice.js';
import profileReducer from '../features/profile/profileSlice.js';
import adminReducer from '../features/admin/adminSlice.js';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        user: userReducer,
        profile: profileReducer,
        admin: adminReducer
    }
})

