import { Alert } from 'react-native';

import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import { HttpCode } from '../constants/const';

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    // baseURL: url,
    baseURL: 'https://fliptok.app/api/fetch?url=',
    // timeout: Number(process.env.REQUEST_TIMEOUT),
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,

    (error: AxiosError) => {
      const { response } = error;

      if (response && response.status >= HttpCode.ServerError) {
        // Alert.alert(`server error: ${error.message}`);
        Alert.alert(`Oops`);
      } else if (response && response.status >= HttpCode.ClientError) {
        // Alert.alert(`client error: ${error.message}`);
        Alert.alert(`Oops`);
      } else {
        Alert.alert(error.message);
      }
      return Promise.reject(error);
    },
  );
  return api;
};

export const api = createAPI();
