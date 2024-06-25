import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type TermsAndConditionStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
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
  footerTextStyle: {
    fontFamily: 'Roboto-Bold',
  },
});
