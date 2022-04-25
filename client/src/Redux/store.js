import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice.js';

export const store = configureStore({
    reducer: {
        token: tokenReducer
    }
});