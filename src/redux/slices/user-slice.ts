import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser.model';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage.util';

const initialState: IUser = {
  id: '',
  email: '',
  phoneNumber: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getLocalStorage('user') ? getLocalStorage('user') : initialState,
  reducers: {
    setUserData: (state, action) => {
      console.log(action.payload);
      const newState = { ...state, ...action.payload };
      setLocalStorage('user', newState);
      return newState;
    },
    clearUserData: () => {
      return { ...initialState };
    },
  },
});
