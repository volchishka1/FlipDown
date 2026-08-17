import { FC } from 'react';
import { Text, View } from 'react-native';
import { ParagraphComponentProps } from '@components/paragraphComponent/types.ts';
import { paragraphComponentStyles } from '@components/paragraphComponent/styles.ts';

export const ParagraphComponent: FC<ParagraphComponentProps> = (props) => {
  const { paragraphName, textStyles, style } = props;
  return (
    <View style={[paragraphComponentStyles.rootParagraphContainer, style]}>
      <Text style={[paragraphComponentStyles.paragraphStyle, textStyles]}>{paragraphName}</Text>
    </View>
  );
};
