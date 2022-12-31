import { configureStore } from '@reduxjs/toolkit';
import { IReportState, IUIState, IUserState, reportSlice, uiSlice, userSlice } from './slices';

export interface IAppStore {
  ui: IUIState;
  user: IUserState;
  report: IReportState;
}

export default configureStore<IAppStore>({
  reducer: {
    ui: uiSlice.reducer,
    user: userSlice.reducer,
    report: reportSlice.reducer,
  },
});
