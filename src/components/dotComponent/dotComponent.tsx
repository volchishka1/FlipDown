import { TextProps, View } from 'react-native';

import React, { FC } from 'react';

import { TextComponent } from '../textComponent/textComponent';

import { dotComponentStyles } from './styles';

export interface DotComponentProps {
  text?: TextProps['children'];
  textStyles?: TextProps['children'];
  style?: TextProps['style'];

}
export const DotComponent: FC<DotComponentProps> = (props) => {
  const { text, style, textStyles } = props;
  return (
    <View style={[dotComponentStyles.rootContainer, style]}>
      <View style={dotComponentStyles.dot} />
      <View style={dotComponentStyles.textContainer}>
        <TextComponent textStyles={textStyles} text={text} />
      </View>
    </View>
  );
};
