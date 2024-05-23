import { ThunkActionResult } from '../types/action';

import { saveData } from './actions';

export const loadData =
  (urlData: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const url = urlData;
    const resp = await api.get(`https://fliptok.app/api/fetch?url=/${url}`);
    if (urlData !== '') {
      dispatch(saveData(resp.data));
      console.log('resp', resp);
    } else {
      console.log('false to send');
    }
  };
