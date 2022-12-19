import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { uiSlice } from '../redux/slices';

export const useUIActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(uiSlice.actions, dispatch);
};
