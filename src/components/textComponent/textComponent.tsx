import { Text, TextProps, View } from 'react-native';

import React, { FC } from 'react';

import { textStyle } from './styles';

export interface TextComponentProps {
  text?: TextProps['children'];
  style?: TextProps['style'];
  textStyles?: TextProps['style'];
}

export const TextComponent: FC<TextComponentProps> = (props) => {
  const { text, style, textStyles } = props;
  return (
    <View style={[textStyle.rootTextContainer, style]}>
      <Text style={[textStyle.textStyle, textStyles]}>{text}</Text>
    </View>
  );
};
