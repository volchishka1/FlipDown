import { combineReducers } from '@reduxjs/toolkit';

import { homeScreen } from './homeScreen/homeScreen';

export enum NameSpace {
  homeScreen = 'HOME_SCREEN',
}
export const rootReducer = combineReducers({
  [NameSpace.homeScreen]: homeScreen,
});

export type RootState = ReturnType<typeof rootReducer>;
