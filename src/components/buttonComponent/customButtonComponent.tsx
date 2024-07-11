import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps, ViewProps
} from "react-native";

import React, { FC } from 'react';

import { customButtonStyles } from './styles';

export type CustomButtonProps = {
  onPress: TouchableOpacityProps['onPress'];
  textButton: TextProps['children'];
  textButtonStyle: TextProps['children'];
  style?: TouchableOpacityProps['style'];
  isLoad?: TouchableOpacityProps['aria-selected'];
};

export const CustomButton: FC<CustomButtonProps> = (props) => {
  const { onPress, textButton, style, isLoad, textButtonStyle } = props;

  return (
    <TouchableOpacity style={[customButtonStyles.buttonStyle, style]} onPress={onPress}>
      {isLoad === false ? (
        <Text style={[customButtonStyles.textButton, textButtonStyle]}>{textButton}</Text>
      ) : (
        <ActivityIndicator size={'small'} color={'white'} />
      )}
    </TouchableOpacity>
  );
};
