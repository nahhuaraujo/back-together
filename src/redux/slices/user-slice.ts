import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/user.model';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '../../utils/localStorage.util';

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
      const newState = { ...state, ...action.payload };
      setLocalStorage('user', newState);
      return newState;
    },
    clearUserData: () => {
      clearLocalStorage('user');
      return { ...initialState };
    },
  },
});
