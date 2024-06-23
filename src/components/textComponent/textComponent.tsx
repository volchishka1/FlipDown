import { Text, View } from 'react-native';

import React, { FC } from 'react';

import { textStyle } from './styles';

export interface TextComponentProps {
  text?: string;
  style?: any;
}

export const TextComponent: FC<TextComponentProps> = (props) => {
  const { text, style } = props;
  return (
    <View style={[textStyle.rootTextContainer, style]}>
      <Text style={textStyle.textStyle}>{text}</Text>
    </View>
  );
};
