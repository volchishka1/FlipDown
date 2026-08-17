import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';
import { api } from '@root/services/api.ts';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
