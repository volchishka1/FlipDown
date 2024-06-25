import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import React, { FC } from 'react';

import { CloseWindowSvg } from '../../../assets/closeModalWindow';

import { closeWindowStyle } from './styles';

export type CloseWindowComponentProps = {
  goToCloseBottomSheet: TouchableOpacityProps['onPress'];
};

export const CloseWindowComponent: FC<CloseWindowComponentProps> = (props) => {
  const { goToCloseBottomSheet } = props;
  return (
    <View style={closeWindowStyle.rootContainer}>
      <TouchableOpacity
        style={closeWindowStyle.buttonStyle}
        accessibilityRole={'button'}
        onPress={goToCloseBottomSheet}
      >
        <CloseWindowSvg />
      </TouchableOpacity>
    </View>
  );
};
