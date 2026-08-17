import { FC } from 'react';
import { Text, View } from 'react-native';
import { textStyle } from './styles';
import { TextComponentProps } from '@components/textComponent/types.ts';

export const TextComponent: FC<TextComponentProps> = (props) => {
  const { text, style, textStyles } = props;
  return (
    <View style={[textStyle.rootTextContainer, style]}>
      <Text style={[textStyle.textStyle, textStyles]}>{text}</Text>
    </View>
  );
};
