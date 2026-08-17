import { FC } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { customButtonStyles } from './styles';
import { CustomButtonProps } from '@components/buttonComponent/types.ts';

export const CustomButton: FC<CustomButtonProps> = (props) => {
  const { onPress, textButton, style, isLoad, textButtonStyle, label, disabled } = props;

  return (
    <TouchableOpacity
      style={[customButtonStyles.buttonStyle, style]}
      onPress={onPress}
      accessibilityLabel={label}
      disabled={disabled}
    >
      {isLoad === false ? (
        <Text style={[customButtonStyles.textButton, textButtonStyle]}>{textButton}</Text>
      ) : (
        <ActivityIndicator size={'small'} color={'white'} />
      )}
    </TouchableOpacity>
  );
};
