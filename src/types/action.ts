import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../store/root-reducer';

export enum ActionType {
  SetProvider = 'user/SetProvider',
  SaveData = 'user/SaveData',
  SetUrl = 'user/SetUrl',
  SetIsLoad = 'user/SetIsLoad',
  SetIsLoadVideo = 'user/SetIsLoadVideo',
  SetIsLoadMusic = 'user/SetIsLoadMusic',
  SetShowLoad = 'user/SetShowLoad',
  SetShowGradeModal = 'user/SetShowGradeModal',
}

export type ThunkActionResult<R = Promise<void | boolean>> = ThunkAction<
  R,
  RootState,
  AxiosInstance,
  Action
>;
