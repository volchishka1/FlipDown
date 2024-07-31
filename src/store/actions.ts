import { createAction } from '@reduxjs/toolkit';

import { ActionType } from '../types/action';

export const setProvider = createAction(ActionType.SetProvider, (SetProvider: string) => ({
  payload: SetProvider,
}));

export const saveData = createAction(ActionType.SaveData, (saveData: any) => ({
  payload: saveData,
}));

export const setUrl = createAction(ActionType.SetUrl, (SetUrl: string) => ({
  payload: SetUrl,
}));

export const setIsLoad = createAction(ActionType.SetIsLoad, (SetIsLoad: boolean) => ({
  payload: SetIsLoad,
}));

export const setIsLoadVideo = createAction(
  ActionType.SetIsLoadVideo,
  (SetIsLoadVideo: boolean) => ({
    payload: SetIsLoadVideo,
  }),
);

export const setIsLoadMusic = createAction(
  ActionType.SetIsLoadMusic,
  (SetIsLoadMusic: boolean) => ({
    payload: SetIsLoadMusic,
  }),
);

export const setShowLoad = createAction(ActionType.SetShowLoad, (SetShowLoad: boolean) => ({
  payload: SetShowLoad,
}));
