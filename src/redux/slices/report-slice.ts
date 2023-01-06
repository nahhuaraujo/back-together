import { createSlice } from '@reduxjs/toolkit';
import { IReport } from '../../models';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '../../utils/localStorage.util';

export interface IReportState {
  list: IReport[];
  filter: 'lost' | 'found' | 'all';
}

const initialState: IReportState = {
  list: [],
  filter: 'all',
};

export const reportSlice = createSlice({
  name: 'reportSlice',
  initialState: getLocalStorage('report') ? getLocalStorage('report') : initialState,
  reducers: {
    setReports: (state, action) => {
      const newState = { ...state, list: [...action.payload] };
      setLocalStorage('report', newState);
      return newState;
    },
    changeFilter: (state, action) => {
      const newState = { ...state, filter: action.payload };
      setLocalStorage('report', newState);
      return newState;
    },
    clearReports: () => {
      clearLocalStorage('report');
      return { ...initialState };
    },
  },
});

export const reportActions = reportSlice.actions;
