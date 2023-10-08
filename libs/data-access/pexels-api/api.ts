import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { plainToInstance } from 'class-transformer';
import { PexelsPhoto, PexelsSearchResponse } from './models';

if (!process.env.EXPO_PUBLIC_PEXELS_API_KEY) {
  throw new Error('Missing EXPO_PUBLIC_PEXELS_API_KEY environment variable');
}

export const pexelsApi = createApi({
  reducerPath: 'pexelsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_PEXELS_API_URL,
    headers: {
      Authorization: process.env.EXPO_PUBLIC_PEXELS_API_KEY as string
    }
  }),
  endpoints: (builder) => ({
    getCuratedPhotos: builder.query<PexelsSearchResponse, { page: number; perPage?: number }>({
      query: ({ page = 1, perPage = 15 }) => `/curated?page=${page}&per_page=${perPage}`,
      transformResponse: (response: Partial<PexelsSearchResponse>) => {
        const { photos } = response;
        const transformedResponse = plainToInstance(PexelsSearchResponse, response);
        transformedResponse.photos = photos?.map((photo) => plainToInstance(PexelsPhoto, photo)) || [];

        return transformedResponse;
      },
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        const { data: response } = await queryFulfilled;

        for (const photo of response.photos) {
          dispatch(pexelsApi.util.upsertQueryData('getPhoto', { id: photo.id }, photo));
        }
      }
    }),
    getPhoto: builder.query<PexelsPhoto, { id: number }>({
      query: ({ id }) => `/photos/${id}`,
      transformResponse: (response: Partial<PexelsPhoto>) => {
        return plainToInstance(PexelsPhoto, response);
      }
    })
  })
});
