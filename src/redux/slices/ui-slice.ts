import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage.util';

export interface IUIState {
  isLoading: boolean;
  isDrawerOpen: boolean;
}

const initialState: IUIState = {
  isLoading: false,
  isDrawerOpen: false,
};

export const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: getLocalStorage('ui') ? getLocalStorage('ui') : initialState,
  reducers: {
    setIsLoading: (state, action) => {
      const newState = { ...state, isLoading: action.payload };
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

export const uiActions = uiSlice.actions;
