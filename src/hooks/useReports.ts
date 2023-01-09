import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reportActions, uiActions } from '../redux/slices';
import { IAppStore } from '../redux/store';

export const useReports = () => {
  const { list: reports } = useSelector((store: IAppStore) => store.report);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        dispatch(uiActions.setIsLoading(true));
        const response = await axios.get(`${process.env.REACT_APP_BACK_TOGETHER_API}/report/find-all`, {
          signal: controller.signal,
        });
        dispatch(reportActions.setReports(response.data.payload));
      } catch (e) {
        console.log((e as Error).message);
      } finally {
        dispatch(uiActions.setIsLoading(false));
      }
    })();
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return { reports };
};
