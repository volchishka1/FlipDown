import { createAction } from '@reduxjs/toolkit';

import { ActionType } from '../types/action';

export const addIsActive = createAction(ActionType.ChangeActive, (isActive: boolean) => ({
  payload: isActive,
}));

export const saveData = createAction(ActionType.SaveData, (saveData: any) => ({
  payload: saveData,
}));

export const setText = createAction(ActionType.SetText, (SetText: string) => ({
  payload: SetText,
}));
