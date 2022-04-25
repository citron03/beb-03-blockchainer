import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice.js';
import reloadReducer from './reload.js';

export const store = configureStore({
    reducer: {
        token: tokenReducer,
        reload: reloadReducer
    }
});