import { createReducer } from '@reduxjs/toolkit';

import { HomeScreen } from '../../types/state';
import { addIsActive, saveData, setStatus } from '../actions';

const initialState: HomeScreen = {
  isActive: false,
  status: 0,
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
    .addCase(setStatus, (state, action) => {
      state.status = action.payload;
    });
});
