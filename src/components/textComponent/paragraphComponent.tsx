import { Text, TextProps, View } from 'react-native';

import React, { FC } from 'react';

import { textStyle } from './styles';

export interface ParagraphComponentProps {
  paragraphName?: TextProps['children'];
  textStyles?: TextProps['style'];
  style?: TextProps['style'];
}
export const ParagraphComponent: FC<ParagraphComponentProps> = (props) => {
  const { paragraphName, textStyles, style } = props;
  return (
    <View style={[textStyle.rootParagraphContainer, style]}>
      <Text style={[textStyle.paragraphStyle, textStyles]}>{paragraphName}</Text>
    </View>
  );
};
