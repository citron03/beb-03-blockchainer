import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    controller: true,
}

const reloading = createSlice({
    name: 'reload',
    initialState,
    reducers: {
        setReload: (state, action) => {
            return Object.assign({}, {
                controller: action.payload.controller
            });
        },
    }
})

export const { setReload } = reloading.actions
export default reloading.reducer