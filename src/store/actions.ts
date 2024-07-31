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
