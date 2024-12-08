import { StatusBar, View } from 'react-native';

import React, { FC } from 'react';

import { MainScreenTabNavigator } from '../../tabs/MainScreen';

import { mainScreenStyles } from './styles';
import { MainScreenProps } from './types';

export const MainScreenView: FC<MainScreenProps> = (props) => {
  const {} = props;
  return (
    <View style={mainScreenStyles.rootContainer}>
      <StatusBar backgroundColor={'#0b1d4d'} />
      <MainScreenTabNavigator />
    </View>
  );
};
