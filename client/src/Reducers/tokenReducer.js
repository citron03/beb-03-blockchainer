import { createReducer } from '@reduxjs/toolkit';

// // actions type 설정
// export const SET_TOKEN = "SET_TOKEN";
// export const REMOVE_TOKEN = "REMOVE_TOKEN";

// // actions creator functions
// export const setToken = (accessToken, username) => {
//     return {
//         type: SET_TOKEN,
//         data: {
//             accessToken,
//             username
//         }
//     }
// }

// export const removeToken = () => {
//     return {
//         type: REMOVE_TOKEN
//     }
// }
// // reducer
// const tokenReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_TOKEN:
//             return {
//                 accessToken: action.data.accessToken,
//                 username: action.data.username
//             };
//         case REMOVE_TOKEN:
//             return {
//                 ...initialState
//             }
//         default:
//             return state;
//     }
// }

// export default tokenReducer;

// const todosReducer = createReducer(state = initialState, (builder) => {
//     builder.addCase('SET_TOKEN', (state, action) => {
//     const {accessToken, username} = action.payload;

//         state = {
//             accessToken,
//             username
//         };
//     })

// initialState
const initialState = {
    accessToken: "",
    username: ""
}

const tokenReducer = createReducer(initialState, (builder) => {
    builder.addCase('SET_TOKEN', (state, action) => {
        const { accessToken, username } = action.payload;
        state = {
            accessToken,
            username
        }
    });
    builder.addCase('REMOVE_TOKEN', (state, action) => {
        state = { ...initialState };
    });
})

export default tokenReducer;