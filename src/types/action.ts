import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../store/root-reducer';

export enum ActionType {
  ChangeActive = 'user/ChangeActive',
  SaveData = 'user/SaveData',
  SetUrl = 'user/SetUrl',
}

export type ThunkActionResult<R = Promise<void | boolean>> = ThunkAction<
  R,
  RootState,
  AxiosInstance,
  Action
>;
