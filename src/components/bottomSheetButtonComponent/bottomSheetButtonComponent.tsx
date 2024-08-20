import { Text, TextProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { strings } from '@constants';
import React, { FC } from 'react';
import { bottomSheetButtonStyles } from '@components/bottomSheetButtonComponent/styles.ts';

export type BottomSheetButtonComponentProps = {
  onPress: TouchableOpacityProps['onPress'];
  textString: TextProps['children'];
};

export const BottomSheetButtonComponent: FC<BottomSheetButtonComponentProps> = (props) => {
  const { onPress, textString } = props;
  return (
    <TouchableOpacity accessibilityRole={'button'} onPress={onPress}>
      <Text style={bottomSheetButtonStyles.textStyle}>{strings.getString(`${textString}`)}</Text>
    </TouchableOpacity>
  );
};
