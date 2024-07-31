import { createReducer } from '@reduxjs/toolkit';

import { HomeScreen } from '../../types/state';
import { saveData, setProvider, setUrl } from '../actions';

const initialState: HomeScreen = {
  setProvider: '',
  url: '',
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
    });
});
