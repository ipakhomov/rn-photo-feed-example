import React, { ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppImage } from '@libs/ui/ui-kit/image';
import { AppText } from '@libs/ui/ui-kit/text';

interface ItemProps {
  imageUrl: string;
  title: string;
  imagePlaceholderUrl?: string;
  placeholderColor?: string;
  onPress?: () => void;
}

export function PhotoCard({
  imageUrl,
  imagePlaceholderUrl,
  placeholderColor,
  title,
  onPress
}: ItemProps): ReactElement {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      delayPressIn={20}
      style={[style.itemContainer, { backgroundColor: placeholderColor }]}>
      <AppImage
        recyclingKey={imageUrl}
        placeholderContentFit='cover'
        placeholder={imagePlaceholderUrl}
        style={style.image}
        source={{ uri: imageUrl }}
      />
      <View style={[style.title, style.titleBackground]} />
      <AppText
        adjustsFontSizeToFit
        numberOfLines={1}
        style={[style.title, style.titleText]}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  itemContainer: {
    overflow: 'hidden',
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  title: {
    position: 'absolute',
    bottom: 0,
    height: '20%'
  },
  titleBackground: {
    backgroundColor: 'black',
    opacity: 0.5,
    width: '100%'
  },
  titleText: {
    color: 'white',
    marginHorizontal: 10,
    maxWidth: '100%',
    textAlignVertical: 'center',
    fontSize: 50
  }
});
