import { Stack, useLocalSearchParams } from 'expo-router';
import React, { ReactElement } from 'react';
import { PhotoDetails } from '@libs/features/photo-details';
import { AppScreen } from '@libs/ui/ui-kit/screen';

type PhotoScreenParams = {
  id: string;
};

export default function PhotoScreen(): ReactElement {
  const { id } = useLocalSearchParams<PhotoScreenParams>();

  return (
    <AppScreen>
      <Stack.Screen options={{ title: 'Photo' }} />
      <PhotoDetails id={Number(id)} />
    </AppScreen>
  );
}
