import { Skeleton } from 'moti/skeleton';
import React, { ReactElement } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { pexelsApi } from '@libs/data-access/pexels-api/api';
import { PhotoCard } from '@libs/ui/photo-card';
import { spacings } from '@libs/ui/styles';
import { AnimatedBackground } from '@libs/ui/ui-kit/animated-background';
import { AppRefreshControl } from '@libs/ui/ui-kit/refresh-control';
import { AppStateScreen } from '@libs/ui/ui-kit/state-screen';

interface PhotosFeedProps {
  id: number;
}

export function PhotoDetails({ id }: PhotosFeedProps): ReactElement {
  const { data: photo, isFetching, refetch } = pexelsApi.useGetPhotoQuery({ id });

  return (
    <AnimatedBackground toColor={photo?.placeholderColor} style={style.content}>
      <ScrollView refreshControl={<AppRefreshControl onRefresh={refetch} refreshing={isFetching} />}>
        <View style={style.content}>
          {photo ? (
            <PhotoCard
              imageUrl={photo.src.large}
              imagePlaceholderUrl={photo.src.medium}
              placeholderColor={photo.placeholderColor}
              title={photo.photographer}
            />
          ) : isFetching ? (
            <Skeleton show colors={['white', 'gray']}>
              <View style={style.skeletonContent} />
            </Skeleton>
          ) : (
            <AppStateScreen title={'Failed to load photo'} />
          )}
        </View>
      </ScrollView>
    </AnimatedBackground>
  );
}

const style = StyleSheet.create({
  content: {
    flex: 1,
    padding: spacings.content
  },
  skeletonContent: {
    width: '100%',
    aspectRatio: 1
  }
});
