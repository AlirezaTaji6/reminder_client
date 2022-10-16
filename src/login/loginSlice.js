import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    phone: '',
    code: '',
    access_token: '',
    force_token: ''
  },
  reducers: {
    addPhone: (state, action) => {
      const login = {
        ...state,
        phone: action.payload,
      };

      return login;
    },
    addCode: (state, action) => {
        const login = {
            ...state,
            code: action.payload
        }

        return login
    },
    addAccessToken: (state, action) => {
        const login = {
            ...state,
            access_token: action.payload
        }

        return login
    },
    addForceToken: (state, action) => {
        const login = {
            ...state,
            force_token: action.payload
        }

        return login
    }
  }
});

// this is for dispatch
export const { addPhone, addCode, addAccessToken, addForceToken } = loginSlice.actions;

// this is for configureStore
export default loginSlice.reducer;