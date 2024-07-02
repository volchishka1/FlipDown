import React, { FC, useEffect } from 'react';

import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ROUTES } from '@constants/routes';
import { MainStackScreenNavigatorParamList } from '@navigation/types';

import { StartScreenView } from './startScreenView';

export type StartScreenComponentProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackScreenNavigatorParamList, ROUTES.MAIN_SCREEN>,
  any
>;

export const StartScreen: FC<StartScreenComponentProps> = ({ navigation }) => {
  const navigateToMainScreen = () => {
    navigation.navigate(ROUTES.MAIN_SCREEN);
  };

  useEffect(() => {
    setTimeout(() => {
      navigateToMainScreen();
    }, 3000);
  });
  return <StartScreenView />;
};
