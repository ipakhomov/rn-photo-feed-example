import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { pexelsApi } from '../pexels-api';
import { rootReducer } from './reducer';

export function createStore(): typeof store {
  const middlewares = [pexelsApi.middleware];

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares) as MiddlewareArray<any>
  });

  return store;
}
