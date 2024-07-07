import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import React, { FC } from 'react';

import { customButtonStyles } from './styles';

export type CustomButtonProps = {
  onPress: TouchableOpacityProps['onPress'];
  textButton: TextProps['children'];
  style?: TouchableOpacityProps['style'];
  isLoad?: TouchableOpacityProps['aria-selected'];
};

export const CustomButton: FC<CustomButtonProps> = (props) => {
  const { onPress, textButton, style, isLoad } = props;

  return (
    <TouchableOpacity style={[customButtonStyles.buttonStyle, style]} onPress={onPress}>
      {isLoad === false ? (
        <Text style={customButtonStyles.textButton}>{textButton}</Text>
      ) : (
        <ActivityIndicator size={'small'} color={'white'} />
      )}
    </TouchableOpacity>
  );
};
