import { createReducer } from '@reduxjs/toolkit';

import { HomeScreen } from '../../types/state';
import { addIsActive, saveData, setUrl } from '../actions';

const initialState: HomeScreen = {
  isActive: false,
  url: '',
  itemData: [],
};

export const homeScreen = createReducer(initialState, (builder) => {
  builder
    .addCase(addIsActive, (state, action) => {
      state.isActive = action.payload;
    })
    .addCase(saveData, (state, action) => {
      state.itemData = action.payload;
    })
    .addCase(setUrl, (state, action) => {
      state.url = action.payload;
    });
});
