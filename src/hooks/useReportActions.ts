import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { reportSlice } from '../redux/slices/report-slice';

export const useReportActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(reportSlice.actions, dispatch);
};
