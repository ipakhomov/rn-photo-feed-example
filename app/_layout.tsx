import 'react-native-gesture-handler';
import 'react-native-reanimated';
import 'reflect-metadata';

import { Stack } from 'expo-router/stack';
import React, { ReactElement } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from '@libs/data-access/store/store';

const store = createStore();

export default function Root(): ReactElement | null {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack />
      </SafeAreaView>
    </Provider>
  );
}
