import React, { ReactElement } from 'react';
import { Text, TextProps } from 'react-native';
import { colors } from '@libs/ui/styles';

export interface AppTextProps extends TextProps {
  color?: keyof typeof colors;
}

export function AppText({ children, color = 'textPrimary', style, ...restProps }: AppTextProps): ReactElement {
  return (
    <Text style={[{ color: colors[color] }, style]} {...restProps}>
      {children}
    </Text>
  );
}
