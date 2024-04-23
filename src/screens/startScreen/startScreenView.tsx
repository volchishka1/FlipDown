import { StatusBar, View } from 'react-native';

import React, { FC } from 'react';

import { LogoSvg } from '../../../assets/logo';
import { LoaderComponent } from '../../components/loaderComponent/loaderComponent';

import { startScreenStyles } from './style';
import { StartScreenViewProps } from './types';

export const StartScreenView: FC<StartScreenViewProps> = () => {
  return (
    <View style={startScreenStyles.rootContainer}>
      <StatusBar backgroundColor={'#1d014b'} />
      <View style={startScreenStyles.centerContainer}>
        <LogoSvg />
      </View>
      <LoaderComponent />
    </View>
  );
};
