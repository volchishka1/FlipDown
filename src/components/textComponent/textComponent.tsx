import { Text, View } from 'react-native';

import React, { FC } from 'react';

import { textStyle } from './styles';

export interface TextComponentProps {
  text: string;
}

export const TextComponent: FC<TextComponentProps> = (props) => {
  const { text } = props;
  return (
    <View style={textStyle.rootTextContainer}>
      <Text style={textStyle.textStyle}>{text}</Text>
    </View>
  );
};
