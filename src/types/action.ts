import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { RootState } from '../store/root-reducer';

export enum ActionType {
  ChangeActive = 'user/ChangeActive',
  SaveData = 'user/SaveData',
  SetText = 'user/SetText',
}

export type ThunkActionResult<R = Promise<void | boolean>> = ThunkAction<
  R,
  RootState,
  AxiosInstance,
  Action
>;
