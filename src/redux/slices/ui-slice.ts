import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils/localStorage.util';

const initialState = {
  filter: 'all',
  isDrawerOpen: false,
};

export const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: getLocalStorage('ui') ? getLocalStorage('ui') : initialState,
  reducers: {
    changeFilter: (state, action) => {
      console.log('action', action);
    },
    openDrawer: state => {
      return { ...state, isDrawerOpen: true };
    },
    closeDrawer: state => {
      return { ...state, isDrawerOpen: false };
    },
  },
});
