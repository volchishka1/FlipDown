import { NameSpace, RootState } from '../root-reducer';

export const getProvider = (state: RootState): string => state[NameSpace.homeScreen].setProvider;
export const getLoadData = (state: RootState): any => state[NameSpace.homeScreen].itemData;
export const getUrl = (state: RootState): string => state[NameSpace.homeScreen].url;
