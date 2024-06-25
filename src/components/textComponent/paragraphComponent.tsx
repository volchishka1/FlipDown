import { Text, View } from 'react-native';

import React, { FC } from 'react';

import { textStyle } from './styles';

export interface ParagraphComponentProps {
  paragraphName?: string;
  textStyles?: any;
  style?: any;
}
export const ParagraphComponent: FC<ParagraphComponentProps> = (props) => {
  const { paragraphName, textStyles, style } = props;
  return (
    <View style={[textStyle.rootParagraphContainer, style]}>
      <Text style={[textStyle.paragraphStyle, textStyles]}>{paragraphName}</Text>
    </View>
  );
};
