import { MainScreenView } from './mainScreenView';
import { Alert, BackHandler } from 'react-native';
import { FC, useEffect } from 'react';
import { ROUTES, strings } from '@constants';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackScreenNavigatorParamList } from '@navigation/types';

export type MainScreenProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackScreenNavigatorParamList, ROUTES.MAIN_SCREEN>,
  any
>;

export const MainScreen: FC<MainScreenProps> = () => {
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
