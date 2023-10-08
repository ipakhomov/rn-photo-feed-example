import React, { ReactElement } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

export function AppScreen(props: ViewProps): ReactElement {
  const { style: elementStyle, children, ...restProps } = props;

  return (
    <View style={[style.screen, elementStyle]} {...restProps}>
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1
  }
});
