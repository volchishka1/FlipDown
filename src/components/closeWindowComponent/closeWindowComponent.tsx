import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import React, { FC } from 'react';

import { CloseWindowSvg } from '../../../assets/closeModalWindow';

import { closeWindowStyle } from './styles';

export type CloseWindowComponentProps = {
  goToCloseBottomSheet: TouchableOpacityProps['onPress'];
  style: TouchableOpacityProps['style'];
  buttonStyle: TouchableOpacityProps['style'];
};

export const CloseWindowComponent: FC<CloseWindowComponentProps> = (props) => {
  const { goToCloseBottomSheet, style, buttonStyle } = props;
  return (
    <View style={[closeWindowStyle.rootContainer, style]}>
      <TouchableOpacity
        style={[closeWindowStyle.buttonStyle, buttonStyle]}
        accessibilityRole={'button'}
        onPress={goToCloseBottomSheet}
      >
        <CloseWindowSvg />
      </TouchableOpacity>
    </View>
  );
};
