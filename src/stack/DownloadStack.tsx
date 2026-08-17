import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '@constants/routes';
import { DownloadScreen } from '@screens/downloadScreen';
import { MainStackScreenNavigatorParamList } from '@navigation/types';
import { FullVideoScreen } from '@screens/fullVideoScreen';

export const DownloadStackNavigator = () => {
  const Stack = createNativeStackNavigator<MainStackScreenNavigatorParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name={ROUTES.DOWNLOAD_SCREEN} component={DownloadScreen} />
      <Stack.Screen name={ROUTES.FULL_VIDEO_SCREEN} component={FullVideoScreen} />
    </Stack.Navigator>
  );
};
