import { createSlice } from '@reduxjs/toolkit'

// initialState
const initialState = {
    accessToken: "",
    username: ""
}

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        // 액션 타입은 슬라이스 이름을 접두어로 사용해서 자동 생성. -> 'token/setToken'
        setToken: (state, action) => {
            return Object.assign({}, {
                accessToken: action.payload.accessToken,
                username: action.payload.username
            });
        },
        removeToken: (state) => {
            return Object.assign({}, {
                accessToken: '',
                username: ''
            });
        }
    }
})

export const { setToken, removeToken } = tokenSlice.actions
export default tokenSlice.reducer