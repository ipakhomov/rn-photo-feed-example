import { Stack, useRouter } from 'expo-router';
import React, { ReactElement, useCallback } from 'react';
import { PhotosFeed } from '@libs/features/photos-feed';
import { AppScreen } from '@libs/ui/ui-kit/screen';

export default function HomeScreen(): ReactElement {
  const router = useRouter();

  const navigateToPhoto = useCallback((id: number): void => {
    router.push({
      pathname: '/(photos)/[id]',
      params: { id }
    });
  }, []);

  return (
    <AppScreen>
      <Stack.Screen options={{ title: 'Feed' }} />
      <PhotosFeed onItemPress={navigateToPhoto} />
    </AppScreen>
  );
}
