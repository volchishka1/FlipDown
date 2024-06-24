import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type TermsAndConditionStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
  descriptionUpdated: TextStyle;
  descriptionText: TextStyle;
  paragraphText: TextStyle;
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
  paragraphText: {
    fontSize: 18,
  },
});
