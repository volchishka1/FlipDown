import { NameSpace, RootState } from '../root-reducer';

export const getProvider = (state: RootState): string => state[NameSpace.homeScreen].setProvider;
export const getLoadData = (state: RootState): any => state[NameSpace.homeScreen].itemData;
export const getUrl = (state: RootState): string => state[NameSpace.homeScreen].url;
export const getIsLoad = (state: RootState): boolean => state[NameSpace.homeScreen].isLoad;
export const getIsLoadVideo = (state: RootState): boolean =>
  state[NameSpace.homeScreen].isLoadVideo;
export const getIsLoadMusic = (state: RootState): boolean =>
  state[NameSpace.homeScreen].isLoadMusic;
export const getShowLoad = (state: RootState): boolean => state[NameSpace.homeScreen].showLoad;
export const getShowGradeModal = (state: RootState): boolean =>
  state[NameSpace.homeScreen].showGradeModal;
