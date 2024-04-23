import { View } from 'react-native';

import React, { FC } from 'react';

import { MainScreen } from '../../tabs/MainScreen';

import { mainScreenStyles } from './styles';
import { MainScreenProps } from './types';

export const MainScreenView: FC<MainScreenProps> = (props) => {
  const {} = props;
  return (
    <View style={mainScreenStyles.rootContainer}>
      <MainScreen />
    </View>
  );
};
