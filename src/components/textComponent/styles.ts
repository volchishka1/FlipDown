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
  rootTextContainer: {
    marginBottom: 30,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#ffffff',
  },
  paragraphStyle: {
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    color: '#c9c9c9',
  },
});
