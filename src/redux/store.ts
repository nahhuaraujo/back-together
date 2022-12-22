import { configureStore } from '@reduxjs/toolkit';
import { IUI, IUser } from '../models';
import { uiSlice, userSlice } from './slices';

export interface IAppStore {
  ui: IUI;
  user: IUser;
}

export default configureStore<IAppStore>({
  reducer: {
    ui: uiSlice.reducer,
    user: userSlice.reducer,
  },
});
