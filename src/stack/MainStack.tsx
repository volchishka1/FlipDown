import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '@constants/routes';
import { MainScreen } from '@screens/mainScreen';
import { MainStackScreenNavigatorParamList } from '@navigation/types';
import { AboutScreen } from '@screens/aboutScreen';
import { ContactsScreen } from '@screens/contactsScreen';

export const MainStackNavigator = () => {
  const Stack = createNativeStackNavigator<MainStackScreenNavigatorParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      {/*<Stack.Screen name={ROUTES.START_SCREEN} component={StartScreen} />*/}
      <Stack.Screen name={ROUTES.MAIN_SCREEN} component={MainScreen} />
      <Stack.Screen name={ROUTES.CONTACTS_SCREEN} component={ContactsScreen} />
      <Stack.Screen name={ROUTES.ABOUT_SCREEN} component={AboutScreen} />
    </Stack.Navigator>
  );
};
