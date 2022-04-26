import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/store.js';
import { setToken } from './Redux/tokenSlice';


// 새로고침 시 로그인 유지를 위해 로컬 스토리지에서 user 정보 불러오기
const loadUser = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user) {
      store.dispatch(setToken(user));
    }
  } catch (e) {
    console.log('localStorage is not working');
  }
}

loadUser();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);