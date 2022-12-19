import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './slices';
import { IUI } from '../models';

export interface IAppStore {
  ui: IUI;
}

export default configureStore<IAppStore>({
  reducer: {
    ui: uiSlice.reducer,
  },
});
