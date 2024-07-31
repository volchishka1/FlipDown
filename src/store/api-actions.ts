import { ThunkActionResult } from '../types/action';

import { saveData, setProvider } from './actions';
import { Alert } from 'react-native';
import { strings } from '@constants';

export const loadData =
  (
    link: string,
    setIsLoad: (arg: boolean) => void,
    setShowLoad: (arg: boolean) => void,
    showLoad: boolean,
  ): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const apiUrl = `https://fliptok.app/api/fetch?url=${link}`;
    setIsLoad(true);
    showLoad && setShowLoad(false);
    api
      .get(apiUrl)
      .then((response) => {
        const res = response.data;
        dispatch(saveData(res));
        setIsLoad(true);
        setTimeout(() => {
          setShowLoad(true);
          setIsLoad(false);
        }, 3000);
      })
      .catch(() => {
        Alert.alert(`${strings.getString('oops')}`);
        setIsLoad(false);
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
        dispatch(setProvider(res));
        console.log(res);
      })
      .catch(() => {
        Alert.alert(`${strings.getString('oops')}`);
      });
  };
