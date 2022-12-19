import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage.util';

const initialState = {
  filter: 'all',
  isDrawerOpen: false,
};

export const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: getLocalStorage('ui') ? getLocalStorage('ui') : initialState,
  reducers: {
    changeFilter: (state, action) => {
      const newState = { ...state, filter: action.payload };
      setLocalStorage('ui', newState);
      return newState;
    },
    openDrawer: state => {
      const newState = { ...state, isDrawerOpen: true };
      setLocalStorage('ui', newState);
      return newState;
    },
    closeDrawer: state => {
      const newState = { ...state, isDrawerOpen: false };
      setLocalStorage('ui', newState);
      return newState;
    },
  },
});
