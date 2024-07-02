import { MainScreenView } from './mainScreenView';
import { Alert, BackHandler } from 'react-native';
import { useEffect } from 'react';

export const MainScreen = () => {
  useEffect(() => {
    const onBackPress = () => {
      Alert.alert(
        'Exit App',
        'Do you want to exit?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              // Do nothing
            },
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false },
      );

      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => backHandler.remove();
  }, []);
  return <MainScreenView />;
};
