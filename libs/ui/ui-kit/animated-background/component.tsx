import { MotiView } from 'moti';
import React, { ReactElement } from 'react';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import { colors } from '@libs/ui/styles';

interface AnimatedBackgroundProps extends ViewProps {
  fromColor?: string;
  toColor?: string;
}

export function AnimatedBackground({ fromColor, toColor, ...props }: AnimatedBackgroundProps): ReactElement {
  return (
    <MotiView
      from={{
        backgroundColor: fromColor || colors.background
      }}
      animate={{
        backgroundColor: toColor
      }}
      transition={{
        delay: 100,
        duration: 500
      }}
      {...props}
    />
  );
}
