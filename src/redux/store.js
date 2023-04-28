import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  // 1.Using Redux Toolkit, we can add the middleware to the store creation. 2.Pass the middleware to the configureStore() function as the second argument.3. We can then use the concat() function to add our custom middleware to the default middleware.4.The getDefaultMiddleware() function returns an array of the default middleware that Redux Toolkit uses internally.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
