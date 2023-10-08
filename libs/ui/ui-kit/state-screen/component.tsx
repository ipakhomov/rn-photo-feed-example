import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { fontSizes } from '@libs/ui/styles';
import { AppText } from '../text';

interface AppStateScreenProps {
  title?: string;
  subtitle?: string;
}

export function AppStateScreen(props: AppStateScreenProps): ReactElement {
  const { title = 'No data found', subtitle = 'Please try to refresh screen' } = props;

  return (
    <View style={style.container}>
      <AppText style={style.titleText}>{title}</AppText>
      <AppText>{subtitle}</AppText>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: fontSizes.large
  }
});
