import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { MainStackNavigator } from '../stack/MainStack';

export const Navigator = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
