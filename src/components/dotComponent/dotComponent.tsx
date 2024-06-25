import { View } from 'react-native';

import React, { FC } from 'react';

import { TextComponent } from '../textComponent/textComponent';

import { dotComponentStyles } from './styles';

export interface DotComponentProps {
  text?: string;
  style?: any;
}
export const DotComponent: FC<DotComponentProps> = (props) => {
  const { text, style } = props;
  return (
    <View style={[dotComponentStyles.rootContainer, style]}>
      <View style={dotComponentStyles.dot} />
      <View style={dotComponentStyles.textContainer}>
        <TextComponent text={text} />
      </View>
    </View>
  );
};
