import React, { FC, useEffect } from 'react';

import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ROUTES } from '@constants/routes';
import { MainStackScreenNavigatorParamList } from '@navigation/types';

import { StartScreenView } from './startScreenView';
import { useDispatch } from 'react-redux';
import { loadProvider } from '@root/store/api-actions.ts';

export type StartScreenComponentProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackScreenNavigatorParamList, ROUTES.START_SCREEN>,
  any
>;

export const StartScreen: FC<StartScreenComponentProps> = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProvider());
  }, []);

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
