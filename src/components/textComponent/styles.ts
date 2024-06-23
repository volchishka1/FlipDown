import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type TextStyleProps = {
  rootParagraphContainer: ViewStyle;
  rootTextContainer: ViewStyle;
  rootHeaderContainer: ViewStyle;
  textStyle: TextStyle;
  paragraphStyle: TextStyle;
  headerStyle: TextStyle;
};

export const textStyle = StyleSheet.create<TextStyleProps>({
  rootParagraphContainer: {
    marginBottom: 10,
  },
  rootTextContainer: {
    marginTop: 10,
    // backgroundColor: 'blue',
  },
  rootHeaderContainer: {
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#ffffff',
    lineHeight: 18,
  },
  paragraphStyle: {
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    color: '#c9c9c9',
  },
  headerStyle: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    color: '#c9c9c9',
  },
});
