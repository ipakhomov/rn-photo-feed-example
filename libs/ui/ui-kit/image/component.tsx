import { Image, ImageProps } from 'expo-image';
import React, { ReactElement } from 'react';

export function AppImage(props: ImageProps): ReactElement {
  return <Image cachePolicy={'memory-disk'} {...props} />;
}
