import { View } from 'react-native';

import React, { FC } from 'react';

import { TextComponent } from '../textComponent/textComponent';

import { dotComponentStyles } from './styles';

export interface DotComponentProps {
  text: string;
}
export const DotComponent: FC<DotComponentProps> = (props) => {
  const { text } = props;
  return (
    <View style={dotComponentStyles.rootContainer}>
      <View style={{ marginRight: 8 }}>
        <View style={dotComponentStyles.dot} />
      </View>
      <TextComponent text={text} />
    </View>
  );
};
