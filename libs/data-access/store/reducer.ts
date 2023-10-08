import { pexelsApi } from '@libs/data-access/pexels-api';

export const rootReducer = {
  [pexelsApi.reducerPath]: pexelsApi.reducer
};
