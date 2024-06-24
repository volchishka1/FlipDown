import { Text, View } from 'react-native';

import React, { FC } from 'react';

import { textStyle } from './styles';

export interface ParagraphComponentProps {
  paragraphName?: string;
  textStyles?: any;
}
export const ParagraphComponent: FC<ParagraphComponentProps> = (props) => {
  const { paragraphName, textStyles } = props;
  return (
    <View style={textStyle.rootParagraphContainer}>
      <Text style={[textStyle.paragraphStyle, textStyles]}>{paragraphName}</Text>
    </View>
  );
};
