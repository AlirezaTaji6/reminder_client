import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/loginSlice'

export default configureStore({
  reducer: {
    login: loginReducer
  },
});