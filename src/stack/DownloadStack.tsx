import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '@constants/routes';
import { DownloadScreen } from '@screens/downloadScreen';
import { FullScreenVideo } from '@components/fullScreenVideo/fullScreenVideoComponent';

export const DownloadStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name={ROUTES.DOWNLOAD_SCREEN} component={DownloadScreen} />
      <Stack.Screen name={ROUTES.FULL_VIDEO_SCREEN} component={FullScreenVideo} />
    </Stack.Navigator>
  );
};
