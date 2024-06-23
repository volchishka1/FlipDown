import { StyleSheet, ViewStyle } from 'react-native';

export type TermsAndConditionStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
};

export const termsAndConditionsStyles = StyleSheet.create<TermsAndConditionStyles>({
  rootContainer: {
    backgroundColor: '#8c54ea',
  },
  centerContainer: {
    marginHorizontal: '3%',
    marginBottom: '10%',
  },
});
