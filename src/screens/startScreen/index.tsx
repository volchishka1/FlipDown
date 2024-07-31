import React, { FC, useEffect } from 'react';

import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ROUTES } from '@constants/routes';
import { MainStackScreenNavigatorParamList } from '@navigation/types';

import { StartScreenView } from './startScreenView';
import axios from 'axios';
import { Alert } from 'react-native';
import { strings } from '@constants';
import { useDispatch } from 'react-redux';
import { setProvider } from '@root/store/actions.ts';

export type StartScreenComponentProps = CompositeScreenProps<
  NativeStackScreenProps<MainStackScreenNavigatorParamList, ROUTES.START_SCREEN>,
  any
>;

export const StartScreen: FC<StartScreenComponentProps> = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const getProvider = () => {
    const apiUrl = `https://fliptok.app/api/ads-provider`;
    axios
      .get(apiUrl)
      .then((response) => {
        const res = response.data;
        dispatch(setProvider(res));
        console.log(res);
      })
      .catch(() => {
        Alert.alert(`${strings.getString('oops')}`);
      });
  };

  useEffect(() => {
    getProvider();
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
