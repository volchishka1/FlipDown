import { ThunkActionResult } from '../types/action';

import { saveData, setIsLoad, setProvider, setShowLoad } from './actions';

export const loadData =
  (link: string, showLoad: boolean): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const apiUrl = `https://fliptok.app/api/fetch?url=${link}`;
    dispatch(setIsLoad(true));
    showLoad && dispatch(setShowLoad(false));
    api
      .get(apiUrl)
      .then((response) => {
        const res = response.data;
        dispatch(saveData(res));
        dispatch(setIsLoad(true));
        setTimeout(() => {
          dispatch(setShowLoad(true));
          dispatch(setIsLoad(false));
        }, 3000);
      })
      .catch(() => {
        dispatch(setIsLoad(false));
      });
  };

export const loadProvider =
  (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const apiUrl = `https://fliptok.app/api/ads-provider`;
    api
      .get(apiUrl)
      .then((response) => {
        const res = response.data;
        dispatch(setProvider(res.provider));
        console.log(res.provider);
      })
      .catch(() => {
        // Alert.alert(`${strings.getString('oops')}`);
      });
  };
