import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../constants/routes';
import { MainScreen } from '../screens/mainScreen';
import { StartScreen } from '../screens/startScreen';

export const MainStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name={ROUTES.START_SCREEN} component={StartScreen} />
      <Stack.Screen name={ROUTES.MAIN_SCREEN} component={MainScreen} />
    </Stack.Navigator>
  );
};
