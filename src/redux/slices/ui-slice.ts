import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage.util';

export interface IUIState {
  isDrawerOpen: boolean;
}

const initialState: IUIState = {
  isDrawerOpen: false,
};

export const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: getLocalStorage('ui') ? getLocalStorage('ui') : initialState,
  reducers: {
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
