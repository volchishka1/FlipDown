import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type TermsAndConditionStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
  descriptionUpdated: TextStyle;
  descriptionText: TextStyle;
  paragraphText: TextStyle;
  paragraphDescriptionText: TextStyle;
  footerTextStyle: TextStyle;
};

export const termsAndConditionsStyles = StyleSheet.create<TermsAndConditionStyles>({
  rootContainer: {
    backgroundColor: '#8c54ea',
    marginBottom: 20,
  },
  centerContainer: {
    marginHorizontal: '3%',
    marginBottom: '10%',
  },
  descriptionUpdated: {
    marginBottom: 40,
  },
  descriptionText: {
    marginBottom: 10,
  },
  paragraphDescriptionText: {
    fontSize: 18,
  },
  paragraphText: {
    fontSize: 18,
  },
  footerTextStyle: {
    fontFamily: 'Roboto-Bold',
  },
  tableContainer: {
    marginBottom: 10,
  },
});
