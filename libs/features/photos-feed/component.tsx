import { FlashList } from '@shopify/flash-list';
import { uniqBy } from 'lodash';
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { pexelsApi } from '@libs/data-access/pexels-api/api';
import { PexelsPhoto } from '@libs/data-access/pexels-api/models';
import { PhotoCard } from '@libs/ui/photo-card';
import { spacings } from '@libs/ui/styles';
import { AppActivityIndicator } from '@libs/ui/ui-kit/activity-indicator';
import { AppRefreshControl } from '@libs/ui/ui-kit/refresh-control';
import { AppStateScreen } from '@libs/ui/ui-kit/state-screen';

interface PhotosFeedProps {
  onItemPress: (id: number) => void;
}

export function PhotosFeed({ onItemPress }: PhotosFeedProps): ReactElement {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState<Array<PexelsPhoto>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { data, isFetching, isError, isLoading } = pexelsApi.useGetCuratedPhotosQuery({ page });
  const isEmptyResult = data?.totalResults === 0;

  const loadNextPage = (): void => {
    if (!isLoading && !isFetching && !!data?.nextPage) {
      setPage(page + 1);
    }
  };

  const refreshItems = (): void => {
    dispatch(pexelsApi.util.resetApiState());
    setPage(1);
    setPhotos([]);
    setIsRefreshing(true);
  };

  useEffect(() => {
    setIsRefreshing(false);

    // WORKAROUND: Pexels API may occasionally return empty photos on some of pages.
    if (!isFetching && data?.photos.length === 0 && photos.length > (data?.totalResults || 0)) {
      setPage(page + 1);

      return;
    }

    if (data?.page === 1) {
      setPhotos(data.photos);
    } else {
      // WORKAROUND: Pexels API may return the same photo multiple times on different pages
      const uniqPhotos = uniqBy([...photos, ...(data?.photos || [])], 'id');
      setPhotos(uniqPhotos);
    }
  }, [data?.page]);

  const renderItem = useCallback(
    ({ item }: { item: PexelsPhoto }) => {
      return (
        <View style={style.listItemContainer}>
          <PhotoCard
            imageUrl={item.src.medium}
            imagePlaceholderUrl={item.src.small}
            title={item.photographer}
            placeholderColor={item.placeholderColor}
            onPress={() => onItemPress(item.id)}
          />
        </View>
      );
    },
    [onItemPress]
  );

  return (
    <FlashList
      onEndReachedThreshold={1}
      contentContainerStyle={style.listContent}
      numColumns={3}
      onEndReached={loadNextPage}
      refreshControl={<AppRefreshControl onRefresh={refreshItems} refreshing={isRefreshing} />}
      ListFooterComponent={
        <AppActivityIndicator style={style.listFooter} visible={isFetching && !isRefreshing && !isError} />
      }
      ListEmptyComponent={
        !isFetching && !isRefreshing && (isEmptyResult || isError) ? (
          <AppStateScreen title={isError ? 'Failed to load photos' : 'No photos so far'} />
        ) : null
      }
      data={photos}
      keyExtractor={(item) => item.id.toString()}
      estimatedItemSize={140}
      renderItem={renderItem}
    />
  );
}

const style = StyleSheet.create({
  listContent: {
    padding: spacings.content
  },
  listFooter: {
    height: 100
  },
  listItemContainer: {
    padding: spacings.content
  }
});
