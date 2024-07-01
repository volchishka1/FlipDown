import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import React, { FC } from 'react';

import { closeWindowStyle } from './styles';

export type CloseWindowComponentProps = {
  goToCloseButton?: TouchableOpacityProps['onPress'];
  style?: TouchableOpacityProps['style'];
  buttonStyle?: TouchableOpacityProps['style'];
  iconSvg?: any;
};

export const CloseWindowComponent: FC<CloseWindowComponentProps> = (props) => {
  const { goToCloseButton, style, buttonStyle, iconSvg } = props;
  return (
    <View style={[closeWindowStyle.rootContainer, style]}>
      <TouchableOpacity
        style={[closeWindowStyle.buttonStyle, buttonStyle]}
        accessibilityRole={'button'}
        onPress={goToCloseButton}
      >
        {iconSvg}
      </TouchableOpacity>
    </View>
  );
};
