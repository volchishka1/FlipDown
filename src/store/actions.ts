import { createAction } from '@reduxjs/toolkit';

import { ActionType } from '../types/action';

export const addIsActive = createAction(ActionType.ChangeActive, (isActive: boolean) => ({
  payload: isActive,
}));

export const saveData = createAction(ActionType.SaveData, (saveData: any) => ({
  payload: saveData,
}));

export const setStatus = createAction(ActionType.SetStatus, (SetStatus: number) => ({
  payload: SetStatus,
}));
