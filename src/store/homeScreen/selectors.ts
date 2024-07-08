import { NameSpace, RootState } from '../root-reducer';

export const getIsActive = (state: RootState): boolean => state[NameSpace.homeScreen].isActive;
export const getLoadData = (state: RootState) => state[NameSpace.homeScreen].itemData;
export const getUrl = (state: RootState) => state[NameSpace.homeScreen].url;
