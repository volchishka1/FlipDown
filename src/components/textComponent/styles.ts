import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type TextStyleProps = {
  rootParagraphContainer: ViewStyle;
  rootTextContainer: ViewStyle;
  textStyle: TextStyle;
  paragraphStyle: TextStyle;
};

export const textStyle = StyleSheet.create<TextStyleProps>({
  rootParagraphContainer: {
    marginBottom: 10,
  },
  rootTextContainer: {},
  textStyle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#ffffff',
    lineHeight: 18,
  },
  paragraphStyle: {
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
    color: '#ffffff',
  },
});
