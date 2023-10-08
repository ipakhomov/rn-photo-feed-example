import React, { ReactElement } from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { colors } from '@libs/ui/styles';

interface AppActivityIndicatorProps extends ActivityIndicatorProps {
  visible?: boolean;
}

export function AppActivityIndicator({ visible, style, ...props }: AppActivityIndicatorProps): ReactElement {
  return (
    <ActivityIndicator
      size='large'
      color={colors.primary}
      style={[style, { opacity: visible ? 1 : 0 }]}
      {...props} />
  );
}
