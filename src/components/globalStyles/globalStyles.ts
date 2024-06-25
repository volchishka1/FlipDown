import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type GlobalStyles = {
  tableContainer: ViewStyle;
  dotComponent: ViewStyle;
  descriptionUpdatedText: ViewStyle;
  descriptionText: ViewStyle;
  boldText: TextStyle;
  paragraphName: TextStyle;
  paragraphDescriptionName: TextStyle;
};

export const globalStyles = StyleSheet.create<GlobalStyles>({
  boldText: {
    fontFamily: 'Roboto-Bold',
  },
  paragraphName: {
    fontSize: 18,
  },
  tableContainer: {
    marginBottom: 10,
  },
  descriptionText: {
    marginBottom: 10,
  },
  paragraphDescriptionName: {
    fontSize: 16,
  },
  descriptionUpdatedText: {
    marginBottom: 40,
  },
  dotComponent: {
    marginBottom: 10,
  },
});
