import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import React, { FC } from 'react';

import { customButtonStyles } from './styles';

export type CustomButtonProps = {
  onPress: () => void;
  textButton: string;
  style?: [string, any];
  isLoad?: boolean;
};

export const CustomButton: FC<CustomButtonProps> = (props) => {
  const { onPress, textButton, style, isLoad } = props;

  return (
    <TouchableOpacity
      style={[customButtonStyles.buttonStyle, style]}
      accessibilityLabel={'button'}
      onPress={onPress}
    >
      {isLoad === false ? (
        <Text style={customButtonStyles.textButton}>{textButton}</Text>
      ) : (
        <ActivityIndicator size={'small'} color={'white'} />
      )}
    </TouchableOpacity>
  );
};
