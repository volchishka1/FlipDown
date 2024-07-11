import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type TermsAndConditionStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
  footerTextStyle: TextStyle;
};

export const termsAndConditionsStyles = StyleSheet.create<TermsAndConditionStyles>({
  rootContainer: {
    backgroundColor: '#8c54ea',
  },
  centerContainer: {
    marginHorizontal: '3%',
    marginBottom: '10%',
  },
  footerTextStyle: {
    marginBottom: '15%',
    fontFamily: 'Roboto-Bold',
  },
});
