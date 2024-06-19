import { StyleSheet, ViewStyle } from 'react-native';

export type PrivacyPolicyScreenStyles = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
};

export const privacyPolicyScreenStyles = StyleSheet.create<PrivacyPolicyScreenStyles>({
  rootContainer: {
    backgroundColor: '#8c54ea',
  },
  centerContainer: {
    marginHorizontal: '3%',
  },
});
