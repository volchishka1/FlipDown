import { View } from 'react-native';

import React from 'react';

import { LogoSvg } from '@assets/logo';

import { logoComponentStyles } from './logoComponentStyles';

export const LogoComponent = () => {
  return (
    <View style={logoComponentStyles.centerContainer}>
      <LogoSvg />
    </View>
  );
};
