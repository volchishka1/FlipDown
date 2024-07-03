import { MainScreenView } from './mainScreenView';
import { Alert, BackHandler } from 'react-native';
import { useEffect } from 'react';
import { strings } from '@constants';

export const MainScreen = () => {
  useEffect(() => {
    const onBackPress = () => {
      Alert.alert(
        `${strings.getString('exit_app')}`,
        `${strings.getString('do_you_want_to_exit')}`,
        [
          {
            text: `${strings.getString('no')}`,
            onPress: () => {
              // Do nothing
            },
            style: 'cancel',
          },
          { text: `${strings.getString('yes')}`, onPress: () => BackHandler.exitApp() },
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
