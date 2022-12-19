import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, userSlice } from './slices';
import { IUI } from '../models';
import { IUser } from '../models/IUser.model';

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
