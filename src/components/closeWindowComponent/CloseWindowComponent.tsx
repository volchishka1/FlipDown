import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { closeWindowStyle } from './styles';
import { CloseWindowComponentProps } from '@components/closeWindowComponent/types.ts';

export const CloseWindowComponent: FC<CloseWindowComponentProps> = (props) => {
  const { goToCloseButton, style, buttonStyle, iconSvg } = props;
  return (
    <View style={[closeWindowStyle.rootContainer, style]}>
      <TouchableOpacity
        style={[closeWindowStyle.buttonStyle, buttonStyle]}
        accessibilityLabel={'Close Window'}
        onPress={goToCloseButton}
      >
        {iconSvg}
      </TouchableOpacity>
    </View>
  );
};
