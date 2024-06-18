import { Text, View } from 'react-native';

import React, { FC } from 'react';

import { textStyle } from './styles';

export interface ParagraphComponentProps {
  paragraphName: string;
}
export const ParagraphComponent: FC<ParagraphComponentProps> = (props) => {
  const { paragraphName } = props;
  return (
    <View style={textStyle.rootParagraphContainer}>
      <Text style={{ color: 'white' }}>{paragraphName}</Text>
    </View>
  );
};
