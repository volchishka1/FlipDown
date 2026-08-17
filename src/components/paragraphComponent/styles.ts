import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ParagraphComponentStyles {
  rootParagraphContainer: ViewStyle;
  paragraphStyle: TextStyle;
}

export const paragraphComponentStyles = StyleSheet.create<ParagraphComponentStyles>({
  rootParagraphContainer: {
    marginBottom: 10,
  },
  paragraphStyle: {
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
    color: '#ffffff',
  },
});
