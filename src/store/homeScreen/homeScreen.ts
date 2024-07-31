import { createReducer } from '@reduxjs/toolkit';

import { HomeScreen } from '../../types/state';
import {
  saveData,
  setIsLoad,
  setIsLoadMusic,
  setIsLoadVideo,
  setProvider,
  setShowLoad,
  setUrl,
} from '../actions';

const initialState: HomeScreen = {
  setProvider: '',
  url: '',
  isLoad: false,
  isLoadVideo: false,
  isLoadMusic: false,
  showLoad: false,
  itemData: [],
};

export const homeScreen = createReducer(initialState, (builder) => {
  builder
    .addCase(setProvider, (state, action) => {
      state.setProvider = action.payload;
    })
    .addCase(saveData, (state, action) => {
      state.itemData = action.payload;
    })
    .addCase(setUrl, (state, action) => {
      state.url = action.payload;
    })
    .addCase(setIsLoad, (state, action) => {
      state.isLoad = action.payload;
    })
    .addCase(setIsLoadVideo, (state, action) => {
      state.isLoadVideo = action.payload;
    })
    .addCase(setIsLoadMusic, (state, action) => {
      state.isLoadMusic = action.payload;
    })
    .addCase(setShowLoad, (state, action) => {
      state.showLoad = action.payload;
    });
});
