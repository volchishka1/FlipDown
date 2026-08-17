import { FC } from 'react';
import { View } from 'react-native';
import { TextComponent } from '../textComponent/TextComponent.tsx';
import { dotComponentStyles } from './styles';
import { DotComponentProps } from '@components/dotComponent/types.ts';

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
