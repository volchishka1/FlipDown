import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface TextStyleProps {
  rootTextContainer: ViewStyle;
  textStyle: TextStyle;
}

export const textStyle = StyleSheet.create<TextStyleProps>({
  rootTextContainer: {},
  textStyle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#ffffff',
    lineHeight: 18,
  },
});
