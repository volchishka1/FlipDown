import { createReducer } from '@reduxjs/toolkit';

import { HomeScreen } from '../../types/state';
import { addIsActive, saveData, setText } from '../actions';

const initialState: HomeScreen = {
  isActive: false,
  text: '',
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
    .addCase(setText, (state, action) => {
      state.text = action.payload;
    });
});
